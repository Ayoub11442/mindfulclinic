
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clinic-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">MindfulCare Clinic</h3>
            <p className="text-gray-300">
              Providing compassionate healthcare services since 2020.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Health Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Contact</h3>
            <p className="text-gray-300">
              Email: contact@mindfulcare.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Health Street, Medical District
            </p>
            <p className="mt-4 text-gray-300">
              <span className="font-semibold">Hours:</span><br />
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 1:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 MindfulCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
