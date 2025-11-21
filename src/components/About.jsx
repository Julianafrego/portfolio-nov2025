import React from 'react';
import { motion } from 'framer-motion';
import fotoProfile from '../assets/foto_profile.jpg';
const About = () => {
  return (
    <section id="about" className="relative py-16 bg-[#F7F5FF] overflow-hidden">
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ y: [0, -10, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[360px] h-[260px] bg-[#FFE7F7]/40 rounded-full blur-3xl right-[-80px] top-[-40px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#3F3A75] mb-4">SOBRE MIM</h2>
          

          <div className='flex justify-around items-center'>
          <div className="relative w-center card-hero border-soft glass p-4 mb-6 rounded-2xl w-[350px] overflow-hidden">
            <img
              src={fotoProfile}
              alt="foto perfil"
                className=" h-[300px] w-[350px] object-cover rounded-xl shadow-inner"
            />
          </div>
          </div>


          <p className="text-[#5F5577] text-lg leading-relaxed mb-6">
            <p className=" text-left leading-relaxed mb-6">
              Me chamo Juliana, sou desenvolvedora Fullstack, tenho experiência em desenvolvimento web e mobile, atuando tanto no front-end quanto no back-end.
            </p>
            
            <p className="text-left leading-relaxed mb-6">
              Já desenvolvi utilizando tecnologias como React, FastAPI, SQL Alchemy, PostgreSQL e MariaDB, etc, sempre focando em criar aplicações funcionais e eficientes.
            </p>
            
            <p className="text-left leading-relaxed mb-8">
              Além da programação, tenho habilidades em design gráfico e UI/UX, procurando unir criatividade e usabilidade para entregar interfaces bonitas e fáceis de usar. Gosto de transformar ideias em soluções eficientes, sempre buscando aprender novas ferramentas e melhorar minhas práticas de desenvolvimento.
            </p>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
            <div className="p-4 glass rounded-xl border-soft">
              <div className="text-sm font-semibold text-[#6D5DD8]">Idade</div>
              <div className="text-[#5F5577]">21</div>
            </div>

            <div className="p-4 glass rounded-xl border-soft">
              <div className="text-sm font-semibold text-[#6D5DD8]">Idiomas</div>
              <div className="text-[#5F5577]">pt-BR • EN • ES</div>
            </div>

            <div className="p-4 glass rounded-xl border-soft">
              <div className="text-sm font-semibold text-[#6D5DD8]">Email</div>
              <div className="text-[#5F5577]">julianafrego@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
