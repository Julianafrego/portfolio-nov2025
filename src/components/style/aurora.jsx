import React from 'react';
import { motion } from 'framer-motion';

const Blob = ({ className, animateProps }) => (
  <motion.div
    initial={{ scale: 1, opacity: 0.9 }}
    animate={animateProps}
    transition={{ duration: 16, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    className={className}
  />
);

const SoftAurora = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* large lilac blob top-left */}
      <Blob
        className="absolute w-[700px] h-[520px] rounded-full blur-3xl bg-[#A78BFA]/30 top-[-120px] left-[-160px] transform"
        animateProps={{ y: [0, -30, 0], scale: [1, 1.04, 1] }}
      />

      {/* soft pink blob bottom-right */}
      <Blob
        className="absolute w-[560px] h-[420px] rounded-full blur-3xl bg-[#FFE7F7]/30 right-[-140px] bottom-[-140px]"
        animateProps={{ y: [0, 20, 0], scale: [1, 1.03, 1] }}
      />

      {/* blue-lavender subtle blob center */}
      <Blob
        className="absolute w-[520px] h-[380px] rounded-full blur-3xl bg-[#6D5DD8]/18 top-[30%] left:[50%] -translate-x-1/2"
        animateProps={{ y: [0, -18, 0], scale: [1, 1.02, 1] }}
      />
    </div>
  );
};

export default SoftAurora;
