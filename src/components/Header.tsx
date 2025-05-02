import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LeadForm from './LeadForm'; // Import LeadForm
import { trackClick } from '../lib/supabase'; // Import trackClick

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false); // Add state for form visibility

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Handles the click event for the 'Free Trial' button.
   * Tracks the click event and shows the lead form.
   * Closes the mobile menu if open.
   */
  const handleTrialClick = async () => {
    await trackClick('trial');
    setShowForm(true);
    setIsOpen(false); // Close mobile menu if open
  };

  /**
   * Handles the successful submission of the lead form.
   * Closes the form and redirects the user to the registration page.
   */
  const handleFormSuccess = () => {
    setShowForm(false);
    window.location.href = 'https://dashboard.majoo.id/auth/register?ref=MAJ0002242';
  };

  return (
    <>
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://portal-gcs-cdn.majoo.id/public/download/logo_icon/majoo_logo_icon_2.png"
            alt="Majoo Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center"> {/* Added items-center */}
          <a href="#fitur" className="font-medium hover:text-primary-600 transition-colors">
            Fitur
          </a>
          <a href="#testimonial" className="font-medium hover:text-primary-600 transition-colors">
            Testimoni
          </a>
          <a href="#faq" className="font-medium hover:text-primary-600 transition-colors">
            FAQ
          </a>
          <button 
            onClick={handleTrialClick} // Use onClick handler
            className="font-medium text-primary-600 hover:text-primary-700 transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Free Trial
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#fitur" 
              className="font-medium hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Fitur
            </a>
            <a 
              href="#testimonial" 
              className="font-medium hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimoni
            </a>
            <a 
              href="#faq" 
              className="font-medium hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <button 
              onClick={handleTrialClick} // Use onClick handler
              className="font-medium text-primary-600 hover:text-primary-700 transition-colors py-2 text-left bg-transparent border-none p-0 cursor-pointer"
            >
              Free Trial
            </button>
          </div>
        </div>
      )}
    </header>

    <LeadForm
      isOpen={showForm}
      onClose={() => setShowForm(false)}
      source="trial" // Set source to 'trial'
      onSuccess={handleFormSuccess} // Pass success handler
    />
    </>
  );
};

export default Header;