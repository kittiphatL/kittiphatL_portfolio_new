import React, { useState } from 'react';
import { Linkedin, Github, Mail, Facebook } from 'lucide-react';
import emailjs from 'emailjs-com';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
      'service_812k4xo',           // Replace with your EmailJS Service ID
      'template_zjmu11w',          // Replace with your EmailJS Template ID
      formData,                    // Data to pass to the template (formData object)
      '_RUNtlhL5dcTY6Z4k'          // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again later.');
    });

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="flex flex-col md:flex-row items-center justify-center lg:space-x-16 bg-gray-50 p-10 space-y-8 lg:space-y-0">
      {/* Left Side: Personal Contact Information */}
      <div className="flex flex-col items-start space-y-4 w-full lg:w-auto">
        <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
        <p className="text-gray-600">Feel free to reach out to me through any of the following methods:</p>
        <div className="flex items-center space-x-2">
          <Mail className="text-blue-600" size={24} />
          <p className="text-gray-700">kittiphat.lot@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <Linkedin className="text-blue-600" size={24} />
          <a href="https://www.linkedin.com/in/kittiphat-lotrakul-88137825a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
        <div className="flex items-center space-x-2">
          <Facebook className="text-blue-600" size={24} />
          <a href="https://www.facebook.com/Kittiphat01/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
        </div>
        <div className="flex items-center space-x-2">
          <Github className="text-blue-600" size={24} />
          <a href="https://github.com/kittiphatL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg max-w-lg w-full space-y-4 shadow-md"
      >
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            type="text"
            name="name"
            placeholder="Insert your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:w-1/2 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Insert your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:w-1/2 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          required
        ></textarea>
        <button 
          type="submit" 
          className="w-full py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
