import React from 'react';
import {
  SiJavascript, SiTypescript, SiPython, SiDart,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiFastapi,
  SiPostgresql, SiMysql, SiGit, SiGithub, SiFigma, SiDocker
} from 'react-icons/si';
import { motion } from 'framer-motion';

const techs = [
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Dart', icon: SiDart },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Postgres', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Figma', icon: SiFigma },
  { name: 'Docker', icon: SiDocker },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#3F3A75] mb-12">Tecnologias</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {techs.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-4 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center border border-gray-100"
              >
                <Icon className="text-3xl mb-2 text-[#6D5DD8]" />
                <div className="text-sm text-[#5F5577] font-medium">{t.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
