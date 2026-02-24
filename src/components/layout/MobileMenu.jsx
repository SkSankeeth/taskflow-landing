import { useEffect } from 'react';
import { Button } from '../ui/Button';

export function MobileMenu({ isOpen, onClose, navLinks, scrollToSection }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 overflow-y-auto">
      <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-3 border-b border-gray-200 dark:border-gray-800"
          >
            {link.name}
          </a>
        ))}
        <div className="pt-4">
          <Button 
            variant="primary" 
            className="w-full"
            onClick={() => {
              window.location.href = '#contact';
              onClose();
            }}
          >
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
}
