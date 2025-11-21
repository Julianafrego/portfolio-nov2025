import React from 'react';
import SoftAurora from '../components/style/aurora';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';

const Header = () => {
  return (
    <header className="relative min-h-[80vh] bg-aurora overflow-hidden">
      <SoftAurora />
      <nav className="relative z-20 container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#3F3A75]">Juliana Freire</div>
      </nav>

      <div className="container mx-auto mt-6 px-6 relative z-20 flex flex-col lg:flex-row items-center gap-10 py-12">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#3F3A75] leading-tight mb-4">
            Olá, eu sou <span className="text-[#6D5DD8]">Juliana</span><br/>
            Desenvolvedora Fullstack
          </h1>

          <p className="text-[#5F5577] max-w-2xl mb-6">
            Crio aplicações web funcionais e interfaces com foco em usabilidade e estética. 
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button
              className="bg-[#A78BFA] hover:bg-[#7C3AED] text-white px-6 py-3 rounded-full"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>

            <Button
              variant="outline"
              className="border-soft text-[#3F3A75] px-6 py-3 rounded-full"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Sobre mim
            </Button>
          </div>
        </motion.div>

        {/* Right: decorative image inside a blob-like card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="lg:w-1/2 flex justify-center"
        >

        </motion.div>
      </div>
    </header>
  );
};

export default Header;
