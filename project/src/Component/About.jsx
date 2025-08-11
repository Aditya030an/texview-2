

// import React from "react";
// import { motion } from "framer-motion";
// import ContactForm from "./ContactForm"; // You already have this component
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// const AboutTaxView = () => {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 font-sans px-6 md:px-20 py-16">
//       {/* Decorative Gradient Shape */}
//       <div className="absolute -top-20 -left-32 w-96 h-96 bg-green-300 rounded-full blur-[120px] opacity-20 z-0" />
//       <div className="absolute -bottom-20 -right-32 w-96 h-96 bg-green-400 rounded-full blur-[120px] opacity-20 z-0" />

//       {/* About Section */}
//       <motion.div
//         className="relative z-10 max-w-5xl mx-auto text-center"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
//           About TaxView
//         </h1>
//         <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
//           TaxView was created to make taxation and compliance simple, transparent, and affordable.
//           With a team led by <strong>CA Moeen Shaikh</strong>, we help individuals, startups,
//           and businesses with <strong>Income Tax Filing, GST, ROC, Audits</strong> — all handled 
//           online, from the comfort of your home.
//         </p>
//       </motion.div>

//       {/* Profile Section */}
//       <motion.div
//         className="relative z-10 max-w-5xl mx-auto mb-20 grid md:grid-cols-3 gap-8 items-center bg-white rounded-xl shadow-lg p-8 border border-green-100"
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         {/* Left: Profile Avatar */}
//         <div className="md:col-span-1 flex justify-center">
//           <div className="w-32 h-32 rounded-full bg-green-200 flex items-center justify-center text-5xl font-bold text-green-700">
//             MS
//           </div>
//         </div>

//         {/* Right: Profile Details */}
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-semibold text-green-700 mb-2">
//             CA Moeen Shaikh
//           </h2>
//           <p className="text-gray-700 text-md md:text-lg leading-relaxed">
//             A qualified Chartered Accountant with over 10+ years of experience in direct & indirect taxation,
//             statutory audits, ROC compliance, and advisory services. Moeen brings professionalism and deep insight,
//             making tax services smoother and more client-focused. He's committed to delivering clarity and
//             affordability through every interaction with TaxView clients.
//           </p>
//         </div>
//       </motion.div>

//       {/* Contact Info Section */}
//       <motion.div
//         className="relative z-10 max-w-5xl mx-auto mb-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
//           📞 Contact Information
//         </h3>

//         <div className="grid md:grid-cols-3 gap-6 text-gray-800">
//           <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow border border-green-100">
//             <FaEnvelope className="text-green-600 text-xl mt-1" />
//             <div>
//               <p className="font-medium">Email</p>
//               <a
//                 href="mailto:info@taxview.in"
//                 className="text-blue-600 hover:underline text-sm"
//               >
//                 info@taxview.in
//               </a>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow border border-green-100">
//             <FaPhoneAlt className="text-green-600 text-xl mt-1" />
//             <div>
//               <p className="font-medium">Phone / WhatsApp</p>
//               <a
//                 href="tel:9867997206"
//                 className="text-blue-600 hover:underline text-sm"
//               >
//                 9867997206
//               </a>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow border border-green-100">
//             <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
//             <div>
//               <p className="font-medium">Office Address</p>
//               <p className="text-sm">
//                 Shop No. 26, 1st Floor, Kedy Shopping Centre,<br />
//                 Jahangir Boman Behram Marg, Nagpada,<br />
//                 Mumbai Central, Mumbai – 400008
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Divider Line */}
//       <motion.hr
//         className="my-16 border-green-300 opacity-50 max-w-4xl mx-auto"
//         initial={{ width: 0 }}
//         whileInView={{ width: "100%" }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       />

//       {/* Reused Contact Form */}
//       <motion.div
//         className="relative z-10 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
//           Let’s Get in Touch
//         </h3>
//         <ContactForm />
//       </motion.div>
//     </section>
//   );
// };

// export default AboutTaxView;


import WhatsappButton from "./WhatsappButton"; 
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import moeenImg from "../assets/moeen.jpg"; // adjust path as needed

const AboutTaxView = () => {
  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 font-sans px-6 md:px-20 py-16">
      {/* Decorative Blurs */}
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-green-300 rounded-full blur-[120px] opacity-20 z-0" />
      <div className="absolute -bottom-20 -right-32 w-96 h-96 bg-green-400 rounded-full blur-[120px] opacity-20 z-0" />

      {/* Header */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">About TaxView</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
        TaxView was created to make taxation and compliance simple, transparent, and affordable. Led
        <strong> by Mubin Shaikh</strong>, a graduate with 10+ years of experience in Taxation & Auditing, we support individuals, startups, and small businesses with ITR Filing, GST, ROC & Audits — all online from the comfort of your home.Backed by a strong network of experienced CAs & CSs, our team ensures legal accuracy, timely filings, and personalized support for every client.


        </p>
      </motion.div>

      {/* Profile Card with Photo */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto mb-20 grid md:grid-cols-3 gap-8 items-center bg-white rounded-xl shadow-lg p-8 border border-green-100"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Profile Image */}
        <div className="md:col-span-1 flex justify-center">
        
        </div>

        {/* Profile Details */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Mubin Shaikh</h2>
          <p className="text-gray-700 text-md md:text-lg leading-relaxed">
          A graduate professional with 10+ years of experience in taxation, audit, and compliance.
          Mubin leads a trusted team of CA & CS experts focused on delivering smooth, affordable, and client-focused services across India.
          </p>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">📞 Contact Information</h3>

        <div className="grid md:grid-cols-3 gap-6 text-gray-800">
          <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow border border-green-100">
            <FaEnvelope className="text-green-600 text-xl mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:info@taxview.in" className="text-blue-600 hover:underline text-sm">info@taxview.in</a>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow border border-green-100">
            <FaPhoneAlt className="text-green-600 text-xl mt-1" />
            <div>
              <p className="font-medium">Phone / WhatsApp</p>
              <a href="tel:9867997206" className="text-blue-600 hover:underline text-sm">9867997206</a>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow border border-green-100">
            <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
            <div>
              <p className="font-medium">Office Address</p>
              <p className="text-sm">
              Mumbai Central, Mumbai – 400008
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.hr
        className="my-16 border-green-300 opacity-50 max-w-4xl mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* Contact Form */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
          Let’s Get in Touch
        </h3>
        <ContactForm />
      </motion.div>
    </section>
     <WhatsappButton></WhatsappButton>
    </>
  );
};

export default AboutTaxView;