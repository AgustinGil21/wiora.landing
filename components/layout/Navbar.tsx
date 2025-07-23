'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Menu, XIcon } from 'lucide-react';
import WioraLogo from '../WioraLogo';

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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 64px)' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden fixed top-16 left-0 right-0 z-40 bg-purple-900/95 backdrop-blur-lg flex flex-col justify-between'
          >
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className='text-purple-200 hover:text-white hover:bg-purple-800/50 px-3 py-2 rounded-md text-xl font-medium w-full flex justify-center max-w-[400px] hover:scale-105'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='pt-4 pb-3 border-t border-purple-700'>
              <div className='mt-3 px-2 space-y-1 flex justify-center'>
                <Button
                  onClick={handleWaitlistClick}
                  className='w-full bg-white text-purple-900 hover:bg-purple-50 rounded-full px-6 py-2 font-medium max-w-[400px] hover:cursor-pointer'
                >
                  Lista de espera
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
