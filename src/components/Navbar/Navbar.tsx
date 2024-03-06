import React, { useState, useEffect ,useRef, Dispatch, SetStateAction } from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { FaRegUser, FaFolderOpen, FaBars, FaTimes } from 'react-icons/fa';
import { IoCodeWorkingOutline } from 'react-icons/io5';
import { MdPriceCheck } from 'react-icons/md';
import { GrContact } from 'react-icons/gr';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';
import { motion, sync, useCycle } from "framer-motion";

// Define types for function parameters
type SidebarProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  i: number;
  colors: string[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref: React.RefObject<HTMLDivElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

const navigation = [
  {
    navIcon: <TiHomeOutline size={30} />,
    navName: 'Home',
    navLink: '/',
  },
  {
    navIcon: <FaRegUser size={30} />,
    navName: 'About Us',
    navLink: '/about',
  },
  {
    navIcon: <IoCodeWorkingOutline size={30} />,
    navName: 'Services',
    navLink: '/services',
  },
  {
    navIcon: <FaFolderOpen size={30} />,
    navName: 'Portfolio',
    navLink: '/portfolio',
  },
  {
    navIcon: <MdPriceCheck size={30} />,
    navName: 'Pricing',
    navLink: '/pricing',
  },
  {
    navIcon: <GrContact size={30} />,
    navName: 'Contact',
    navLink: '/contactus',
  },
];

const mbnavigation = [
  {
    navIcon: <TiHomeOutline size={20}  color='white' />,
    navName: 'Home',
    navLink: '/',
  },
  {
    navIcon: <FaRegUser size={20} color='white' />,
    navName: 'About Us',
    navLink: '/about',
  },
  {
    navIcon: <IoCodeWorkingOutline size={20} color='white' />,
    navName: 'Services',
    navLink: '/services',
  },
  {
    navIcon: <FaFolderOpen size={20} color='white'  />,
    navName: 'Portfolio',
    navLink: '/portfolio',
  },
  {
    navIcon: <MdPriceCheck size={20} color='white'  />,
    navName: 'Pricing',
    navLink: '/pricing',
  },
  {
    navIcon: <GrContact size={20} color='white' />,
    navName: 'Contact',
    navLink: '/contactus',
  },
];

const ulvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu, i,colors,setIsOpen }) => {
  console.log("i value:", i); // Log the value of i to see if it's correct
  const colorIndex = i >= 0 && i < colors.length ? i : 0;
  
  const handleNavItemClick = () => {
    // Close the sidebar when a navigation item is clicked
    setIsOpen(false);
  };

  const style = { border: `2px solid ${colors[colorIndex]}` };
  console.log("style:", style);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              clipPath: `circle(1000px at 40px 40px)`,
              transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
              }
            },
            closed: {
              clipPath: "circle(30px at 40px 40px)",
              transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
              }
            }
          }}
          className='back'
        >
          <div className="p-6">
            <button className="close" onClick={toggleMenu}>
              <FaTimes size={30} color='white' className='close '/> 
            </button>
            <motion.ul className="mt-4" variants={ulvariants}>
              {mbnavigation.map((navItem, index) => (
                <motion.li key={index}
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} className='sidebar-list'>
                  <div className="icon-placeholder">
                    {navItem.navIcon}
                  </div>
                  <Link to={navItem.navLink}>
                    <div className="text-placeholder"  onClick={handleNavItemClick}>
                      {navItem.navName}
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar: React.FC = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990 ); // Set initial state based on screen width
  const [isopen, toggleopen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openMenu1 = () => {
    setIsOpen(true);
    console.log("It is clicked")
  };

  const closeMenu = () => {
    setIsOpen(false);
    console.log(isOpen)
  };

  return (
    <>
      {isMobile && (
        <button onClick={openMenu1} className='open'>
          <FaBars size={30} />
        </button>
      )}
      <nav className="navbar">
        <ul>
          {navigation.map((navItem, index) => (
            <li key={index}>
              <Link to={navItem.navLink} onClick={toggleIcons} className="cursor-pointer">
                <span>{navItem.navIcon}</span>
                <span>{navItem.navName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isMobile && <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} i={colors.length} colors={colors} setIsOpen={setIsOpen}/>}
    </>
  );
};

export default Navbar;
