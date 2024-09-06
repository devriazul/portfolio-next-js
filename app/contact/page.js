'use client'; // Add this directive at the top

import React, { useState } from 'react';
import axios from 'axios';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      setStatus('Success! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error! There was a problem sending your message.');
    }
  };

  return (
    <div className="p-8 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">Contact Us</h1>
        {status && (
          <p className={`text-center mb-6 ${status.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {status}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium mb-1 text-white" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 rounded p-2 text-black bg-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1 text-white" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded p-2 text-black bg-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1 text-white" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-gray-300 rounded p-2 text-black bg-gray-100"
              rows="6"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
