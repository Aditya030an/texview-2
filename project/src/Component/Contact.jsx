import React from "react";
import ContactForm from "./ContactForm";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import WhatsappButton from "./WhatsappButton";
import { motion } from "framer-motion";

// Fade-up animation for text blocks
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

// Page fade-in
const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  return (
    <motion.section
      className="bg-white text-gray-800 font-sans px-6 md:px-20 py-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={pageFade}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-600 mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600"
        >
          We’re here to help! Reach out to us for any assistance.
        </motion.p>
      </div>

      {/* Contact Info + Map */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
        {/* Info Section */}
        <div className="space-y-6">
          {[
            {
              icon: <FaMapMarkerAlt className="text-green-500 text-2xl mt-1" />,
              label: "Address",
              value: `Mumbai Central, Mumbai – 400008`,
            },
            {
              icon: <FaEnvelope className="text-green-500 text-2xl mt-1" />,
              label: "Email",
              value: (
                <a
                  href="mailto:info@taxview.in"
                  className="text-blue-600 hover:underline"
                >
                  info@taxview.in
                </a>
              ),
            },
            {
              icon: <FaPhoneAlt className="text-green-500 text-2xl mt-1" />,
              label: "Phone / WhatsApp",
              value: (
                <a
                  href="tel:9867997206"
                  className="text-blue-600 hover:underline"
                >
                  9867997206
                </a>
              ),
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex items-start gap-4"
            >
              {info.icon}
              <p>
                <span className="font-semibold">{info.label}:</span>
                <br />
                {info.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Map Embed */}
        <motion.div
          className="w-full h-80 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe
            title="TaxView Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5312089543227!2d72.82792747482943!3d19.126387150283136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedb3facc59b%3A0xe9d5e4996ddc93d4!2sKedy%20Shopping%20Centre!5e0!3m2!1sen!2sin!4v1720740000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
          Send Us a Message
        </h2>

        {/* 👇 Contact Form Inputs Animated in ContactForm.jsx (optional) */}
        <ContactForm />
      </motion.div>

      <WhatsappButton />
    </motion.section>
  );
};

export default ContactPage;