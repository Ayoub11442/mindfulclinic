
import { useState } from 'react';
import { Menu, X, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Doctors', href: '/doctors' },
    { text: 'About Us', href: '/about' },
    { text: 'Blog', href: '/blog' },
    { text: 'FAQ', href: '/faq' },
    { text: 'Contact', href: '/contact' },
    { text: 'Book Appointment', href: '/booking' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    // Only prevent default for hash links
    if (e.currentTarget.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsLoading(true);
    setActiveItem(item);

    // Simulate loading for smooth transition
    setTimeout(() => {
      setIsLoading(false);
      if (isOpen) setIsOpen(false);
    }, 300);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif font-bold text-clinic-gray hover:text-black transition-colors duration-300">
              MindfulCare
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.text)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group
                    ${activeItem === item.text || location.pathname === item.href ? 'text-clinic-blue' : 'text-clinic-gray hover:text-black'}`}
                >
                  {isLoading && activeItem === item.text ? (
                    <Loader className="animate-spin h-4 w-4" />
                  ) : (
                    <>
                      {item.text}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-clinic-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 hover:bg-clinic-blue/20 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.text)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                  ${activeItem === item.text || location.pathname === item.href ? 'text-clinic-blue bg-clinic-blue/10' : 'text-clinic-gray hover:text-black hover:bg-clinic-blue/20'}`}
              >
                {isLoading && activeItem === item.text ? (
                  <Loader className="animate-spin h-4 w-4" />
                ) : (
                  item.text
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
