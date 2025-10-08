import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

import PixelCard from "../components/PixelCard";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const onSubmit = async (data) => {
    setSubmissionStatus("loading");

    try {
      await emailjs.send(
        "service_56uq7ul", // 🔑 Replace with your emailjs service ID
        "template_xq5wp7n", // 🔑 Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "LVVMQia1U2bWxnEiM" // 🔑 Replace with your EmailJS public key
      );

      setSubmissionStatus("success");
      reset(); // ✅ clears form
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmissionStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: <HiMail className="text-3xl" />,
      title: "Email",
      info: "manishraz800@gmail.com",
      description: "Drop me a line anytime",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: <HiPhone className="text-3xl" />,
      title: "Phone",
      info: "+91 8210328929",
      description: "Mon-Fri from 9am to 6pm",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: <HiLocationMarker className="text-3xl" />,
      title: "Address",
      info: "Gaya Jee, Bihar",
      description: "Available for remote work",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: <HiClock className="text-3xl" />,
      title: "Response Time",
      info: "Within 24 hours",
      description: "Usually much faster",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white">
              Let's Create Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block">
                Amazing Together
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Let's turn your
              ideas into reality!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <PixelCard key={index} variant="pink">
                <div className="absolute">
                  <div className={`${info.color} flex justify-center mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-white font-medium mb-1">{info.info}</p>
                  <p className="text-neutral-300 text-sm">{info.description}</p>
                </div>
              </PixelCard>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-20 lg:py-32 bg-neutral-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT SIDE: Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Send a Message
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mt-2"></div>
              </h2>
              <p className="text-neutral-300 mb-8 max-w-md">
                Fill out the form below to get in touch. I look forward to
                hearing about your project!
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full px-4 py-3 bg-neutral-700 text-white rounded-lg border focus:border-purple-400 focus:outline-none transition ${
                        errors.name ? "border-red-500" : "border-neutral-600"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full px-4 py-3 bg-neutral-700 text-white rounded-lg border focus:border-purple-400 focus:outline-none transition ${
                        errors.email ? "border-red-500" : "border-neutral-600"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    {...register("subject", { required: "Subject is required" })}
                    className={`w-full px-4 py-3 bg-neutral-700 text-white rounded-lg border focus:border-purple-400 focus:outline-none transition ${
                      errors.subject ? "border-red-500" : "border-neutral-600"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your message..."
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-4 py-3 bg-neutral-700 text-white rounded-lg border focus:border-purple-400 focus:outline-none transition ${
                      errors.message ? "border-red-500" : "border-neutral-600"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>

              {/* Status messages */}
              {submissionStatus === "success" && (
                <div className="mt-4 p-4 rounded-lg bg-green-500/20 text-green-200">
                  ✅ Thank you for your message! I'll get back to you shortly.
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="mt-4 p-4 rounded-lg bg-red-500/20 text-red-200">
                  ❌ Oops! Something went wrong. Please try again later.
                </div>
              )}
            </motion.div>

            {/* RIGHT SIDE: Contact + Socials */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-neutral-700 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Get In Touch Directly
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <HiMail className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a
                        href="mailto:manishraz800@gmail.com"
                        className="text-neutral-300 hover:text-purple-400"
                      >
                        manishraz800@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <HiPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <a
                        href="tel:+91821032**29"
                        className="text-neutral-300 hover:text-green-400"
                      >
                        +91 821032**29
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <HiLocationMarker className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-neutral-300">Gaya Jee, Bihar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-700 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Connect With Me
                </h3>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/StrictlyManish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a
                    href="https://twitter.com/@XManish_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-sky-400 transition"
                  >
                    <FaTwitter size={28} />
                  </a>
                  <a
                    href="https://instagram.com/manishraz1789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-pink-400 transition"
                  >
                    <FaInstagram size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
