import { motion } from 'motion/react';

export function AnimateIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.75 }}>
      {children}
    </motion.div>
  );
}
