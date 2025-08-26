import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiAlertCircle } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Clear the specific error as the user starts typing
    if (errors[id]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed with submission
      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted with data:", formData);
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } catch (error) {
        setSubmitStatus('error');
      }
    } else {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="min-h-screen bg-neutral-900/50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight mb-4"
          >
            Let's <span className="text-purple-600">Connect</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            I'd love to hear from you. Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="bg-gray-700 p-8 rounded-2xl shadow-xl  border-purple-600"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>
            <ul className="space-y-6">
              <motion.li variants={itemVariants} className="flex items-start gap-4">
                <FiMail className="text-3xl text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Email Address</h4>
                  <a href="mailto:manish@example.com" className="text-gray-200 hover:text-blue-600 transition-colors duration-300">
                    manishraz800@gamil.com
                  </a>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-4">
                <FiPhone className="text-3xl text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Phone Number</h4>
                  <a href="tel:+919876543210" className="text-gray-200 hover:text-green-600 transition-colors duration-300">
                    +91 8210328929
                  </a>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-4">
                <FiMapPin className="text-3xl text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">My Location</h4>
                  <p className="text-gray-200">Gaya JEE , Bihar, India</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl  border-gray-200 text-white"
          >
            <h3 className="text-2xl font-bold text-gray-400 mb-6">Send me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full text-purple-600 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FiAlertCircle className="inline-block" /> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block  text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-purple-600 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FiAlertCircle className="inline-block" /> {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 text-purple-600 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FiAlertCircle className="inline-block" /> {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition-colors duration-300 transform ${isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 hover:scale-105'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FiSend className="text-xl" />
                    Send Message
                  </>
                )}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-center text-green-600 font-medium">
                Message sent successfully!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-center text-red-600 font-medium">
                An error occurred. Please try again.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;