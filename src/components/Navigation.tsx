import { useState, useEffect } from 'react';
import { Menu, X, Loader, CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Doctors', href: '/doctors' },
    { text: 'About Us', href: '/about' },
    { text: 'Blog', href: '/blog' },
    { text: 'FAQ', href: '/faq' },
    { text: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    if (e.currentTarget.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsLoading(true);
    setActiveItem(item);

    setTimeout(() => {
      setIsLoading(false);
      if (isOpen) setIsOpen(false);
    }, 300);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 shadow-md backdrop-blur-sm py-2" 
          : "bg-white/90 backdrop-blur-sm shadow-sm py-4"
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-serif font-bold text-clinic-gray hover:text-black transition-colors duration-300"
              aria-label="MindfulCare - Home"
            >
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
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group",
                    (activeItem === item.text || location.pathname === item.href) 
                      ? "text-clinic-blue" 
                      : "text-clinic-gray hover:text-black"
                  )}
                  aria-current={
                    (activeItem === item.text || location.pathname === item.href) 
                      ? "page" 
                      : undefined
                  }
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
          
          <div className="hidden md:flex">
            <Button 
              variant="default" 
              size="sm" 
              className="bg-clinic-gray hover:bg-black text-white ml-4 px-5 py-2 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => window.location.href = '/booking'}
            >
              <CalendarPlus className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 hover:bg-clinic-blue/20 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
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
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300",
                  (activeItem === item.text || location.pathname === item.href) 
                    ? "text-clinic-blue bg-clinic-blue/10" 
                    : "text-clinic-gray hover:text-black hover:bg-clinic-blue/20"
                )}
                aria-current={
                  (activeItem === item.text || location.pathname === item.href) 
                    ? "page" 
                    : undefined
                }
              >
                {isLoading && activeItem === item.text ? (
                  <Loader className="animate-spin h-4 w-4" />
                ) : (
                  item.text
                )}
              </Link>
            ))}
            
            <div className="pt-2">
              <Button 
                variant="default" 
                size="sm" 
                className="w-full bg-clinic-gray hover:bg-black text-white font-medium transition-all duration-300 shadow-md"
                onClick={() => window.location.href = '/booking'}
              >
                <CalendarPlus className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
