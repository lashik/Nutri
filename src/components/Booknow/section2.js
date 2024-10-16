import React from 'react';
import { useState } from 'react';
import section2Styles from './section2.module.scss';
const FORMSPREE_URL = 'https://formspree.io/f/xvgoowrp'; 
const RenderSection2 =()=>{
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending form data to Formspree
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          number: '',
          description: ''
        });
      } else {
        alert('There was an issue submitting the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an issue submitting the form.');
    }
  };
  return (
    <div className={section2Styles.flex_col}>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScm4bkw4VeKAT6iitZ2cBHONUp3PGmBWc3CwX8NVv_HCGdm-A/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="10" marginwidth="100" c>Loading…</iframe>
    </div>
  );
}

export default RenderSection2;
