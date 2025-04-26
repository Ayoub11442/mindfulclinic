import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-clinic-gray">
                MindfulCare
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="text-gray-500 hover:text-clinic-gray px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-500 hover:text-clinic-gray px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <a
                href="#doctors"
                className="text-gray-500 hover:text-clinic-gray px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Doctors
              </a>
              <a
                href="#testimonials"
                className="text-gray-500 hover:text-clinic-gray px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-500 hover:text-clinic-gray px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="hidden sm:flex items-center">
            <Link
              to="/booking"
              className="bg-clinic-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-clinic-gray transition-colors"
            >
              Book Appointment
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-clinic-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clinic-blue"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-500 hover:text-clinic-gray block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-500 hover:text-clinic-gray block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Services
          </Link>
          <a
            href="#doctors"
            className="text-gray-500 hover:text-clinic-gray block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Doctors
          </a>
          <a
            href="#testimonials"
            className="text-gray-500 hover:text-clinic-gray block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-500 hover:text-clinic-gray block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="px-2">
          <Link
            to="/booking"
            className="bg-clinic-blue text-white block px-4 py-2 rounded-md text-base font-medium hover:bg-clinic-gray transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
