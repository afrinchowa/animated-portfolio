"use client";

import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <div className="py-20 px-6 md:px-12 max-w-2xl mx-auto">
            {/* Contact Details Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-purple">My Contact Details</h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-700">📧</span>
            <span className="text-sm text-gray-600">Email: <a href="mailto:your.email@example.com" className="text-purple-500">arfinchowa524@gmail.com</a></span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-700">📞</span>
            <span className="text-sm text-gray-600">Phone: 01831071099</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-700">🌐</span>
            <span className="text-sm text-gray-600">Website: <a href="website.com" className="text-purple-500">website.com</a></span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-700">🔗</span>
            <span className="text-sm text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/moriomafrinchowa1/" className="text-purple-500">My profile</a></span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-700">🏠</span>
            <span className="text-sm text-gray-600">Address: 123 Street,Dhaka City, Bangladesh</span>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-semibold mb-6 text-center text-purple">
        Contact Me
      </h1>

      {isSubmitted ? (
        <div className="bg-green-500 text-white p-4 rounded-lg text-center mb-6">
          Thank you for reaching out! I&apos;ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter the subject"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message here"
              rows={6}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 focus:outline-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}

  
    </div>
  );
};

export default ContactMe;
