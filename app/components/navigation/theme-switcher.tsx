import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { MdComputer } from 'react-icons/md';
import { navDesktop } from '../../theme/animations/nav-animation';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
   const [mounted, setMounted] = useState(false);
   const { setTheme, resolvedTheme } = useTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return (
      <motion.ul
         className='flex gap-4 z-50'
         variants={navDesktop}
         animate='visible'
         initial='hidden'
      >
         <motion.li
            className={
               resolvedTheme === 'light' ? '' : 'text-[var(--secondary)]'
            }
            whileHover={{
               x: -2,
               y: -2,
               scale: 1.1,
            }}
         >
            <FiSun
               className='cursor-pointer'
               size={30}
               onClick={() => setTheme('light')}
               aria-label='Light mode'
            />
         </motion.li>
         <motion.li
            className={
               resolvedTheme === 'dark' ? '' : 'text-[var(--secondary)]'
            }
            whileHover={{
               x: -2,
               y: -2,
               scale: 1.1,
            }}
         >
            <FiMoon
               className='cursor-pointer'
               size={30}
               onClick={() => setTheme('dark')}
               aria-label='Dark mode'
            />
         </motion.li>
         <motion.li
            className='text-[var(--secondary)]'
            whileHover={{
               x: -2,
               y: -2,
               scale: 1.1,
            }}
         >
            <MdComputer
               className='cursor-pointer'
               size={30}
               onClick={() => setTheme('system')}
               aria-label='System mode'
            />
         </motion.li>
      </motion.ul>
   );
}
