import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { FiHome, FiInfo, FiBriefcase, FiPhone } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  const linkClasses = ({ isActive }) =>
    `relative text-lg font-medium cursor-pointer transition-all duration-300 
     hover:text-green-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
     after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full
     ${isActive ? 'text-green-400 after:w-full' : ''}`;

  const mobileLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
     ${isActive ? 'bg-white/10 text-green-400' : 'text-white hover:bg-white/5'}`;

  // Outside click handler
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const timeout = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img
              width={60}
              height={60}
              src="/images/growtalyst.png"
              alt="Growtalyst Logo"
              className="hover:scale-105 transition-transform"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white">
            <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
            <li><NavLink to="/work" className={linkClasses}>Work</NavLink></li>
            <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
          </ul>

          {/* WhatsApp (Desktop) */}
          <a
            href="https://wa.me/919874223031"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <button
              type="button"
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                         hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 
                         shadow-lg shadow-green-500/50 font-medium rounded-full text-sm px-4 py-2 cursor-pointer transition-transform hover:scale-105"
            >
              <FaWhatsapp size={16} /> Whatsapp
            </button>
          </a>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-white rounded-full p-2 border border-white/10 hover:bg-white/5 transition"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Overlay (Dim background) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-72 md:hidden
                    bg-black text-white border-r border-white/10 shadow-2xl z-50
                    transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="/growtalyst.png" alt="Growtalyst" className="w-9 h-9" />
            <span className="font-semibold">Growtalyst</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white rounded-full p-2 hover:bg-white/5 transition"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="px-3 py-4 space-y-1">
          <NavLink to="/" className={mobileLinkClasses} onClick={() => setMenuOpen(false)}>
            <FiHome /> Home
          </NavLink>
          <NavLink to="/about" className={mobileLinkClasses} onClick={() => setMenuOpen(false)}>
            <FiInfo /> About
          </NavLink>
          <NavLink to="/work" className={mobileLinkClasses} onClick={() => setMenuOpen(false)}>
            <FiBriefcase /> Work
          </NavLink>
          <NavLink to="/contact" className={mobileLinkClasses} onClick={() => setMenuOpen(false)}>
            <FiPhone /> Contact
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <a href="https://wa.me/919874223031" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                         hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 
                         shadow-lg shadow-green-500/50 font-medium rounded-full text-sm px-4 py-3"
              onClick={() => setMenuOpen(false)}
            >
              <FaWhatsapp size={16} /> Whatsapp
            </button>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
