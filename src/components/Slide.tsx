import { type FC, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  children: ReactNode;
  className?: string;
  background?: string;
}

const Slide: FC<SlideProps> = ({ children, className = '', background = '' }) => {
  return (
    <section
      data-background={background || 'radial-gradient(circle at center, rgba(0,242,254,0.08), transparent)'}
      className="reveal-slide h-full"
    >
      <div className="h-full flex items-center justify-center p-2 md:p-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className={`
            glass-card rounded-2xl md:rounded-[3rem]
            p-5 md:p-10 
            w-full max-w-[95%] md:max-w-[1400px] 
            mx-auto relative overflow-hidden
            transition-all duration-700
            border border-[#00f2fe]/40
            shadow-[0_0_60px_rgba(0,242,254,0.2),inset_0_0_60px_rgba(255,255,255,0.05)]
            backdrop-blur-[40px] bg-black/50 ${className}
          `}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Slide;