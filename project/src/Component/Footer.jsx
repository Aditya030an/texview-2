import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"; // Or "next/link" if using Next.js

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700 py-10 px-6 md:px-20 font-sans border-t border-green-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
      >
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Contact Us
          </h3>
          <p className="mb-2">
            📧 <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:info@taxview.in"
              className="text-blue-600 hover:underline"
            >
              info@taxview.in
            </a>
          </p>
          <p className="mb-2">
            📞 <span className="font-medium">Mobile:</span>{" "}
            <a href="tel:9867997206" className="text-blue-600 hover:underline">
              9867997206
            </a>
          </p>
          <p>
            📍 <span className="font-medium">Address:</span> Mumbai Central,
            Mumbai – 400008
          </p>
        </div>

        {/* Disclaimer */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Disclaimer
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            All services are provided by registered CA/CS professionals. This
            platform is for assistance and information only. No unsolicited
            solicitation as per ICAI guidelines.
          </p>
        </div>
      </motion.div>

      {/* Bottom Strip */}
      <div className="mt-10 border-t border-green-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} TaxView. All rights reserved.
        </p>

        <div className="flex items-center gap-7 ">
          {/* Privacy Policy Link */}
          <Link
            to="/Privacy-Policy" // Route to your PrivacyPolicy page
            className="text-sm text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>

          <Link
            to="/Terms-Conditions" // Route to your PrivacyPolicy page
            className="text-sm text-blue-600 hover:underline"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-green-700 text-lg">
          <a
            href="https://www.instagram.com/taxview.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/taxviewindia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-900 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
