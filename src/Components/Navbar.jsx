import React, { useState, useEffect, use } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import Switch from './Switch';
import image from '../assets/briefcase.svg';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {user,signOutUser}=use(AuthContext)
  const handleSignOut = () => {
    signOutUser()
    .then(() => {
      console.log('User signed out successfully');
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
  }

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Force sticky white navbar for other routes
      setIsScrolled(true);
    }
  }, [location.pathname]);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
      isScrolled ? 'text-base-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
    } ${isActive ? 'text-blue-600 underline underline-offset-4' : ''}`;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-base-100 backdrop-blur-md shadow-lg border-b border-gray-200/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-base-content' : 'text-white'
              }`}
            >
              <div className="flex gap-4">
                <img src={image} className="w-5" alt="" />
                <p>TalentPath</p>
              </div>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/jobSite" className={navLinkClass}>
              Jobs
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="-mt-5">
              <Switch checked={theme === 'dark'} onChange={toggleTheme} />
            </div>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex space-x-2">
              {
                user?<button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button>:<>
                <Link to={'/signIn'}>
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-base-content hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                sign In
                
              </button>
              </Link>
              <Link to={'/signUp'}>
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                    : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                Sign Up
              </button>
              </Link>
                </>
              }
              
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div
              className={`px-2 pt-2 pb-3 grid grid-cols-1 gap-y-3 sm:px-3 rounded-lg mt-2 transition-all duration-300 ${
                isScrolled
                  ? 'bg-base-200 backdrop-blur-md shadow-lg border border-gray-200/20'
                  : 'bg-black/20 backdrop-blur-md border border-white/20'
              }`}
            >
              <NavLink to="/" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/jobSite" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Jobs
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </NavLink>

              <button
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-base-700 hover:text-gray-900' : 'text-base-100 hover:text-gray-200'
                }`}
              >
                Sign In
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
