


// import React from "react";
// import {
//   FaGavel,
//   FaGlobeAsia,
//   FaRupeeSign,
//   FaClock,
//   FaCheckCircle,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import ContactForm from "./ContactForm";
// import WhatsappButton from "./WhatsappButton";
// import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// const TaxConsultancy = () => {
//   const services = [
//     {
//       title: "Income Tax Filing",
//       description:
//         "Hassle-free ITR filing for salaried, business & professionals. Get expert advice from a qualified CA on deductions, tax planning, and refund eligibility.",
//     },
//     {
//       title: "GST Registration & Return Filing",
//       description:
//         "New GST registration within 2–3 days. Monthly or quarterly return filing by experts. We also help with GST notices, late fees & compliance issues.",
//     },
//     {
//       title: "Auditing",
//       description:
//         "We provide complete auditing solutions including statutory audits, tax audits (as per Income Tax Act), and internal audits for operational efficiency.",
//     },
//     {
//       title: "Company Formation & Registration",
//       description:
//         "Register your business as Pvt Ltd, LLP, OPC, or Partnership. Includes PAN, TAN, MOA-AOA & ROC filings. Bank-ready legal documentation provided.",
//     },
//     {
//       title: "Trademark Registration",
//       description:
//         "Protect your business name, logo, and brand identity. We handle trademark filing, documentation & tracking until approval — legal & affordable.",
//     },
//     {
//       title: "Company Annual Filing",
//       description:
//         "Stay compliant with AOC-4, MGT-7, DIR-3 KYC & other MCA requirements. Filing is done by CA/CS professionals to avoid penalties and ensure readiness.",
//     },
//     {
//       title: "Book Keeping & Outsourcing",
//       description:
//         "Accurate monthly or quarterly bookkeeping. Ideal for startups & SMEs. Cloud-ready and monitored by Chartered Accountants for compliance.",
//     },
//     {
//       title: "Tax Advisory & Investment Planning",
//       description:
//         "Plan taxes and grow your wealth with expert CA support. Advice on 80C, ELSS, HRA, capital gains, and more — with goal-oriented investment planning.",
//     },
//   ];
//   const features = [
//     {
//       icon: <FaGavel className="text-green-500 text-3xl" />,
//       title: "CA/CS Verified Team",
//       desc: "Experienced professionals ensuring accuracy & reliability.",
//     },
//     {
//       icon: <FaGlobeAsia className="text-green-500 text-3xl" />,
//       title: "PAN India | 100% Online",
//       desc: "Access our services from anywhere across the country.",
//     },
//     {
//       icon: <FaRupeeSign className="text-green-500 text-3xl" />,
//       title: "Affordable & Transparent Pricing",
//       desc: "No hidden charges. Pay for exactly what you need.",
//     },
//     {
//       icon: <FaClock className="text-green-500 text-3xl" />,
//       title: "Timely Reminders & Client Support",
//       desc: "Never miss a deadline with proactive follow-ups.",
//     },
//   ];

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     service: "",
//   });

//   const [captcha, setCaptcha] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCaptchaChange = (value) => {
//     setCaptcha(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     const { name, email, phone, city, service } = formData;
//     if (!name || !email || !phone || !city || !service) {
//       return alert("Please fill in all fields.");
//     }

//     if (!/^\d{10}$/.test(phone)) {
//       return alert("Phone number must be 10 digits.");
//     }

//     if (!captcha) {
//       return alert("Please verify reCAPTCHA.");
//     }

//     try {
//       setLoading(true);
//       const res = await fetch(
//         `${import.meta.env.VITE_API_ENDPOINT}/api/user/consultancy`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ ...formData, captcha }),
//         }
//       );

//       const data = await res.json();

//       console.log("response ", data);

//       if (data?.success) {
//         alert("Form submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           city: "",
//           service: "",
//         });
        
//       } else {
//         alert(data.message || "Something went wrong.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Main Section */}
//       <section className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-5 md:px-20 font-sans">
//         <div className="flex flex-col md:flex-row justify-between items-start gap-12">
//           {/* Left Side: Services */}
//           <div className="md:w-1/2 space-y-6">
//             <h2 className="text-4xl md:text-5xl font-bold leading-snug tracking-tight">
//               Your One-Stop Platform for CA/CS Tax <br />
//               <span className="text-green-400">& Compliance Services</span>
//             </h2>
//             <p className="text-gray-300 text-lg">
//               Trusted by professionals & startups. Get everything done in one
//               place with our hassle-free consultancy.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
//       {services.map((item, index) => (
//         <div
//           key={index}
//           className="group relative flex items-start gap-3 hover:scale-[1.02] transition-transform duration-300"
//         >
//           <FaCheckCircle className="text-green-400 text-xl mt-1" />
//           <div>
//             <p className="text-gray-100 text-base font-medium">{item.title}</p>

//             {/* Hover Description Reveal */}
//             <p className="text-sm text-gray-300 max-h-0 overflow-hidden group-hover:max-h-32 group-hover:mt-1 transition-all duration-300 ease-in-out">
//               {item.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>

            
//           </div>

//           {/* Right Side: Form */}
//           <div className="md:w-1/2 bg-white text-black p-8 rounded-2xl shadow-xl max-w-md w-full">
//             <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
//               For <span className="text-orange-600">Expert</span> Consultancy
//             </h3>
//             <p className="text-center text-gray-600 mb-6 text-lg">
//               Get in Touch Today
//             </p>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <input
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Full Name*"
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address*"
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <div className="flex items-center gap-3">
//                 <input
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Mobile Number*"
//                   className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 />
//               </div>
//               <input
//                 name="city"
//                 type="text"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="City*"
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               >
//                 <option value="">Select a Service</option>
//                 <option value="itr">Income Tax Return (ITR) Filing</option>
//                 <option value="gst">GST Registration / Filing</option>
//                 <option value="company">
//                   Company Registration (Pvt Ltd / LLP)
//                 </option>
//                 <option value="trademark">Trademark Registration</option>
//                 <option value="msme">MSME / Udyam Registration</option>
//                 <option value="roc">ROC / Annual Compliance</option>
//                 <option value="roc">Other</option>
//               </select>

//               {/* reCAPTCHA */}
//               <ReCAPTCHA
//                 sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your actual site key
//                 onChange={handleCaptchaChange}
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !captcha}
//                 className={`text-white w-full py-3 rounded-lg font-medium transition ${captcha ? "bg-blue-600 hover:bg-blue-700  " : "bg-gray-400 cursor-not-allowed"}`} 
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us - Light Theme + Scroll Animation */}
//       <section className="bg-white text-gray-800 py-20 px-5 md:px-20 font-sans">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Why <span className="text-green-500">Choose Us</span>?
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Your financial success is our priority. Here’s what sets us apart:
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition text-left"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
//               <p className="text-gray-700 text-sm">{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//       <ContactForm></ContactForm>
//       <WhatsappButton />
//     </>
//   );
// };

// export default TaxConsultancy;



import React, { useState } from "react";
import {
  FaGavel,
  FaGlobeAsia,
  FaRupeeSign,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import WhatsappButton from "./WhatsappButton";
import ReCAPTCHA from "react-google-recaptcha";

const TaxConsultancy = () => {
  const services = [
    {
      title: "Income Tax Filing",
      description:
        "Hassle-free ITR filing for salaried, business & professionals. Get expert advice from a qualified CA on deductions, tax planning, and refund eligibility.",
    },
    {
      title: "GST Registration & Return Filing",
      description:
        "New GST registration within 2–3 days. Monthly or quarterly return filing by experts. We also help with GST notices, late fees & compliance issues.",
    },
    {
      title: "Auditing",
      description:
        "We provide complete auditing solutions including statutory audits, tax audits (as per Income Tax Act), and internal audits for operational efficiency.",
    },
    {
      title: "Company Formation & Registration",
      description:
        "Register your business as Pvt Ltd, LLP, OPC, or Partnership. Includes PAN, TAN, MOA-AOA & ROC filings. Bank-ready legal documentation provided.",
    },
    {
      title: "Trademark Registration",
      description:
        "Protect your business name, logo, and brand identity. We handle trademark filing, documentation & tracking until approval — legal & affordable.",
    },
    {
      title: "Company Annual Filing",
      description:
        "Stay compliant with AOC-4, MGT-7, DIR-3 KYC & other MCA requirements. Filing is done by CA/CS professionals to avoid penalties and ensure readiness.",
    },
    {
      title: "Book Keeping & Outsourcing",
      description:
        "Accurate monthly or quarterly bookkeeping. Ideal for startups & SMEs. Cloud-ready and monitored by Chartered Accountants for compliance.",
    },
    {
      title: "Tax Advisory & Investment Planning",
      description:
        "Plan taxes and grow your wealth with expert CA support. Advice on 80C, ELSS, HRA, capital gains, and more — with goal-oriented investment planning.",
    },
  ];

  const features = [
    {
      icon: <FaGavel className="text-green-500 text-3xl" />,
      title: "CA/CS Verified Team",
      desc: "Experienced professionals ensuring accuracy & reliability.",
    },
    {
      icon: <FaGlobeAsia className="text-green-500 text-3xl" />,
      title: "PAN India | 100% Online",
      desc: "Access our services from anywhere across the country.",
    },
    {
      icon: <FaRupeeSign className="text-green-500 text-3xl" />,
      title: "Affordable & Transparent Pricing",
      desc: "No hidden charges. Pay for exactly what you need.",
    },
    {
      icon: <FaClock className="text-green-500 text-3xl" />,
      title: "Timely Reminders & Client Support",
      desc: "Never miss a deadline with proactive follow-ups.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
  });

  const [captcha, setCaptcha] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, city, service } = formData;
    if (!name || !email || !phone || !city || !service) {
      return alert("Please fill in all fields.");
    }

    if (!/^\d{10}$/.test(phone)) {
      return alert("Phone number must be 10 digits.");
    }

    if (!captcha) {
      return alert("Please verify reCAPTCHA.");
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/api/user/consultancy`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, captcha }),
        }
      );
      const data = await res.json();
      if (data?.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          service: "",
        });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-5 md:px-20 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug tracking-tight">
              Your One-Stop Platform for CA/CS Tax <br />
              <span className="text-green-400">& Compliance Services</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              Trusted by professionals & startups. Get everything done in one
              place with our hassle-free consultancy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-3 hover:scale-[1.02] transition-transform duration-300"
                >
                  <FaCheckCircle className="text-green-400 text-xl mt-1" />
                  <div>
                    <p className="text-gray-100 text-sm sm:text-base font-medium">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 max-h-0 overflow-hidden group-hover:max-h-32 group-hover:mt-1 transition-all duration-300 ease-in-out">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 bg-white text-black p-8 rounded-2xl shadow-xl max-w-md w-full">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 mb-2">
              For <span className="text-orange-600">Expert</span> Consultancy
            </h3>
            <p className="text-center text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
              Get in Touch Today
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name*"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number*"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="City*"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select a Service</option>
                <option value="itr">Income Tax Return (ITR) Filing</option>
                <option value="gst">GST Registration / Filing</option>
                <option value="company">
                  Company Registration (Pvt Ltd / LLP)
                </option>
                <option value="trademark">Trademark Registration</option>
                <option value="msme">MSME / Udyam Registration</option>
                <option value="roc">ROC / Annual Compliance</option>
                <option value="roc">Other</option>
              </select>

              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptchaChange}
              />

              <button
                type="submit"
                disabled={loading || !captcha}
                className={`text-white w-full py-3 rounded-lg font-medium transition ${
                  captcha
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white text-gray-800 py-20 px-5 md:px-20 font-sans">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-green-500">Choose Us</span>?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Your financial success is our priority. Here’s what sets us apart:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactForm />
      <WhatsappButton />
    </>
  );
};

export default TaxConsultancy;