



// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import logo from "./photos/logo1.png";

// gsap.registerPlugin(ScrollTrigger);

// const Navbar = () => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       navRef.current,
//       { opacity: 0, y: -50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: navRef.current,
//           start: "top top",
//         },
//       }
//     );
//   }, []);

//   return (
//     <header
//       ref={navRef}
//       className="w-full bg-white shadow-md sticky top-0 z-50"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <a href="/" className="flex items-center space-x-2">
//           <img src={logo} alt="TaxView" className="w-24 object-contain" />
//         </a>

//         {/* Nav Links */}
//         <nav className="hidden md:flex space-x-10 text-[18px] font-semibold text-gray-800">
//           {[
//             { label: "Home", href: "/", active: true },
//             { label: "About Us", href: "/About" },
//             { label: "Contact", href: "/Contact" },
//           ].map((link, i) => (
//             <a
//               key={i}
//               href={link.href}
//               className={`relative group transition-all ${
//                 link.active ? "text-blue-600" : "text-gray-800"
//               }`}
//             >
//               {link.label}
//               <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </a>
//           ))}
//         </nav>

//         {/* Optional: Mobile Nav Placeholder */}
//         <div className="md:hidden">
//           {/* Add hamburger menu if needed */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./photos/logo1.png";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: navRef.current,
          start: "top top",
        },
      }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "About Us", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ];

  return (
    <header
      ref={navRef}
      className="w-full bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="TaxView" className="w-24 object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-[18px] font-semibold text-gray-800">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`relative group transition-all ${
                link.active ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-md">
          <nav className="flex flex-col space-y-4 text-[18px] font-semibold text-gray-800">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`relative transition-all ${
                  link.active ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;