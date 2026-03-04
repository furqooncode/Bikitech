import { useState } from 'react';
import colors from './color.jsx'; 
import logo from './assets/logo.jpg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT US', id: 'about' },
    { label: 'OUR SERVICES', id: 'services' },
    { label: 'PRODUCTS', id: 'products' },
    { label: 'FAQ', id: 'faq' },
    { label: 'CONTACT US', id: 'contact' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Menu – slides down from top */}
      <aside
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="px-6 pb-8 flex flex-col gap-6 text-white font-semibold text-xl">
          {navItems.map((item) => (
            <span
              key={item.id}
              className="cursor-pointer hover:text-amber-200 transition-colors"
              onClick={() => {
                scrollTo(item.id);
                setActiveId(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
            </span>
          ))}
        </nav>

        <div className="text-center py-6 text-xs text-gray-300 italic">
          THANKS FOR PATRONIZING – LET'S CONNECT
        </div>
      </aside>

      {/* Header / Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-40 px-4 py-3 flex items-center justify-between"
        style={{
          background: '#f3cba5',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
          src={logo}
          alt="Biki Tech Logo" 
          className="h-[50px] w-[50px] rounded-[50%]" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-3xl text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <span
                key={item.id}
                className={`relative py-2 px-1 cursor-pointer transition-colors duration-300 group ${
                  isActive ? 'text-amber-900' : 'hover:text-amber-900'
                }`}
                onClick={() => {
                  scrollTo(item.id);
                  setActiveId(item.id);
                }}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-amber-800 transition-all duration-400 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </span>
            );
          })}
        </nav>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}