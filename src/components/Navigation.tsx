
import { useState } from 'react';
import { Menu, X, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'Services', href: '#services' },
    { text: 'Doctors', href: '#doctors' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Book Appointment', href: '#booking' },
    { text: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsLoading(true);
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
            <h1 className="text-2xl font-serif font-bold text-clinic-gray hover:text-black transition-colors duration-300">
              MindfulCare
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-clinic-gray hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-clinic-blue/20 relative group"
                >
                  {isLoading ? (
                    <Loader className="animate-spin h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  ) : (
                    <>
                      {item.text}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-clinic-gray transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </>
                  )}
                </a>
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
              <a
                key={item.text}
                href={item.href}
                onClick={handleNavClick}
                className="text-clinic-gray hover:text-black block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-clinic-blue/20"
              >
                {isLoading ? (
                  <Loader className="animate-spin h-4 w-4" />
                ) : (
                  item.text
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
