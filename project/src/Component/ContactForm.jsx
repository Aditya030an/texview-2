

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ReCAPTCHA from "react-google-recaptcha";


// const SplitContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     service: "",
//     message: "",
//   });

//   const [captchaValue, setCaptchaValue] = useState(null);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleCaptchaChange = (value) => {
//     setCaptchaValue(value);
//   };

//    const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!captchaValue) {
//       alert("Please complete the CAPTCHA before submitting.");
//       return;
//     }
//     if(!formData.phone?.length  === 10){
//       alert("Please enter 10 digit phone number")
//     }

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/user/contact`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...formData, captcha: captchaValue }),
//       });

//       const data = await response.json();

//       console.log("response", data);

//       if (data?.success) {
//         alert("Message sent successfully!");
//         setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
//         setCaptchaValue(null);
//       } else {
//         alert("Something went wrong: " + data?.message);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Error sending form. Please try again.");
//     }
//   };
//   return (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-tr from-green-50 via-white to-green-100 text-gray-900 px-6 md:px-20 py-20 overflow-hidden font-sans">
//       <motion.div
//         className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       />

//       <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl shadow-2xl grid md:grid-cols-2 gap-8 p-8 md:p-16">
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col justify-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold leading-snug text-green-700">
//             We’re here to help You.
//           </h2>
//           <h3 className="text-5xl font-black text-green-800 mt-4 mb-2">
//             We’d Love
//           </h3>
//           <h4 className="text-3xl font-semibold text-green-700 mb-4">
//             TO HEAR FROM YOU
//           </h4>
//           <p className="text-gray-700 text-lg">
//             Schedule time to talk with an expert matched to your accounting and tax related needs.
//           </p>
//         </motion.div>

//         {/* Right Form */}
//         <motion.form
//         onSubmit={handleSubmit}
//           action="https://formsubmit.co/info@taxview.in"
//           method="POST"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="space-y-4 bg-white p-8 rounded-xl text-black backdrop-blur-lg shadow-lg border border-green-200"
//         >
//           <input type="hidden" name="_captcha" value="false" />
//           <input type="hidden" name="_template" value="box" />

//           <input type="text" name="name" required placeholder="Full Name*" value={formData.name} onChange={handleChange}
//             className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
//           <input type="email" name="email" required placeholder="Email Address*" value={formData.email} onChange={handleChange}
//             className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
//           <input type="tel" name="phone" required placeholder="Phone*" value={formData.phone} onChange={handleChange}
//             className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
//           <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange}
//             className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
//           <input type="text" name="service" required placeholder="Services You Are Interested In*" value={formData.service} onChange={handleChange}
//             className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
//           <textarea name="message" required rows="4" placeholder="How can we help you?*" value={formData.message} onChange={handleChange}
//             className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />

//           {/* reCAPTCHA */}
//           <ReCAPTCHA
//             sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // replace this with your actual site key
//             onChange={handleCaptchaChange}
//           />

//           <button
//             type="submit"
//             disabled={!captchaValue}
//             className={`w-full py-3 rounded-md text-white font-semibold shadow-lg transition duration-300 ${
//               captchaValue
//                 ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
//                 : "bg-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Submit
//           </button>

//           <p className="text-sm text-center text-gray-600 mt-2">
//             Your data is safe. We never spam.
//           </p>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default SplitContactSection;




import React, { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const SplitContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }
    if (!formData.phone || formData.phone.length !== 10) {
      alert("Please enter a 10-digit phone number");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/api/user/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, captcha: captchaValue }),
        }
      );

      const data = await response.json();
      console.log("response", data);

      if (data?.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setCaptchaValue(null);
      } else {
        alert("Something went wrong: " + data?.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending form. Please try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-tr from-green-50 via-white to-green-100 text-gray-900 px-4 sm:px-6 md:px-20 py-16 md:py-20 overflow-hidden font-sans">
      <motion.div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl shadow-2xl grid md:grid-cols-2 gap-8 p-6 sm:p-8 md:p-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug text-green-700">
            We’re here to help You.
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-800 mt-3 mb-1">
            We’d Love
          </h3>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-700 mb-4">
            TO HEAR FROM YOU
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            Schedule time to talk with an expert matched to your accounting and tax related needs.
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 bg-white p-6 sm:p-8 rounded-xl text-black backdrop-blur-lg shadow-lg border border-green-200"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="name"
            required
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
          <input
            type="text"
            name="service"
            required
            placeholder="Services You Are Interested In*"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
          <textarea
            name="message"
            required
            rows="4"
            placeholder="How can we help you?*"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />

          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleCaptchaChange}
          />

          <button
            type="submit"
            disabled={!captchaValue}
            className={`w-full py-3 rounded-md text-white font-semibold shadow-lg transition duration-300 text-sm sm:text-base ${
              captchaValue
                ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit
          </button>

          <p className="text-xs sm:text-sm text-center text-gray-600 mt-2">
            Your data is safe. We never spam.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default SplitContactSection;