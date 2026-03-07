import React from 'react';
import {
  SiJavascript, SiTypescript, SiPython, SiDart,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiFastapi,
  SiPostgresql, SiMysql, SiGit,SiFlutter, SiGithub, SiFigma, SiDocker, SiAngular, SiNodedotjs, SiSpringboot, SiSqlite
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { motion } from 'framer-motion';

const techs = [
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Angular', icon: SiAngular },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },

  { name: 'Python', icon: SiPython },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },

  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'SQLite', icon: SiSqlite },

  { name: 'Flutter', icon: SiFlutter },
  { name: 'Dart', icon: SiDart },

  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Docker', icon: SiDocker },
  { name: 'Figma', icon: SiFigma },
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
