'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLockScroll } from '@/hooks/use-lock-scroll';

interface Item {
  name: string;
  href: string;
}

interface Props {
  handleLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
  handleWaitlistClick: () => void;
  navItems: Item[];
  isOpen: boolean;
}

export const NavbarMobile = ({
  navItems,
  handleLinkClick,
  handleWaitlistClick,
  isOpen,
}: Props) => {
  useLockScroll(isOpen);

  return (
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
  );
};
