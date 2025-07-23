'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Menu, XIcon } from 'lucide-react';
import WioraLogo from '../WioraLogo';
import { NavbarMobile } from './NavbarMobile';

const Navbar = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast({
        title: '🚧 Sección no encontrada',
        description:
          'Parece que esta sección no existe. ¡Pero no te preocupes!',
        duration: 3000,
      });
    }
    if (isOpen) setIsOpen(false);
  };

  const handleWaitlistClick = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) setIsOpen(false);
  };

  const navItems = [
    { name: 'Características', href: '#features' },
    { name: 'Cómo funciona', href: '#how-it-works' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-purple-900/80 backdrop-blur-lg border-b border-purple-400/20'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <a
                href='#hero'
                onClick={(e) => handleLinkClick(e, '#hero')}
                className='flex-shrink-0 flex items-center gap-2'
              >
                <WioraLogo />
              </a>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className='text-purple-200 hover:text-white transition-colors duration-300 font-medium'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='hidden md:flex items-center'>
              <Button
                onClick={handleWaitlistClick}
                className='bg-white text-purple-900 hover:bg-purple-50 rounded-full px-6 py-2 font-medium'
              >
                Lista de espera
              </Button>
            </div>
            <div className='md:hidden flex items-center'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='inline-flex items-center justify-center p-2 rounded-md text-purple-200 hover:text-white hover:bg-purple-700/50 focus:outline-none'
              >
                {isOpen ? (
                  <XIcon className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <NavbarMobile
            isOpen={isOpen}
            handleLinkClick={handleLinkClick}
            handleWaitlistClick={handleWaitlistClick}
            navItems={navItems}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
