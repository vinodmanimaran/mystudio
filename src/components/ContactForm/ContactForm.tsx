import React, { useState } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission, for example, sending data to the server
    console.log(formData);
  };

  return (
    <div className="glassmorphic-container">
      <div className="glassmorphic-card">
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter your Name' />
          </div>
          <div className="form-input">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your Email' />
          </div>
          <div className="form-input">
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter your Phone' />
          </div>
          <div className="form-input">
            <input type="text" name="service" value={formData.service} onChange={handleChange} placeholder='Enter your Service' />
          </div>
          <div className="form-input">
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Enter your Message'></textarea>
          </div>
          <div className="form-input">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
