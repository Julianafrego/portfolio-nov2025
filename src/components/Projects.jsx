import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Github } from "lucide-react";
import { motion } from "framer-motion"; // não esqueça de importar se usar motion
import intelectoquiz from '../assets/intelectoquiz.png';
import voley from '../assets/volley.png';
import imc from '../assets/imc.jpg';
import xitoque from '../assets/xitoque.png';
import velha from '../assets/velha.jpg';
import mosca from '../assets/mosca.png';
import les from '../assets/les.png';
import bmm from '../assets/bmm.png';

const Projects = () => {
  const projects = [
        {
      id: 8,
      title: "BMMWEB",
      description: "Site desenvolvido para permitir criação e comparação de modelos de negócios de forma simplificada e intuitiva, através da seleção de padrões predefinidos. A ferramenta terá versão atualizada disponível em breve, nos idiomas português-br e inglês.",
      image: bmm,
      site: "https://bmm.prp.uespi.br/"
    },
    {
      id: 7,
      title: "Portfolio - LES",
      description: "Site desenvolvido em equipe para o Laboratório de Engenharia de Software da UESPI – Campus Piripiri, apresentando projetos, publicações, participantes e parceiros, e destacando as atividades e conquistas do laboratório.",
      image: les,
    },
    {
      id: 2,
      title: "Voley app",
      description: "Aplicativo para acompanhar e contabilizar pontos realizados pelos times em uma partida de vôlei, permitindo registrar o placar em tempo real e facilitar o controle de forma simples e prática durante o jogo.",
      image: voley,
      github: "https://github.com/Julianafrego/volley_app"
    },
    {
      id: 3,
      title: "BMI Calculator", 
      description: "Aplicativo para calcular o IMC e indicar se a pessoa está abaixo do peso, no peso ideal ou com sobrepeso. Para realizar a análise, o app solicita informações como sexo, idade, peso e altura, oferecendo um resultado claro e fácil de entender.",
      image: imc,
      github: "https://github.com/Julianafrego/imc_app"
    },
    {
      id: 4,
      title: "Xitoque",
      description: "Aplicativo infantil com cores vibrantes e interface simples, que permite tocar dois instrumentos: um xilofone com 7 teclas, do dó ao si, e um mini teclado com 12 teclas, proporcionando diversão e aprendizado musical.",
      image: xitoque,
      github: "https://github.com/Julianafrego/xitoque_app"
    },
    {
      id: 5,
      title: "Jogo da velha",
      description: "O aplicativo consiste em um jogo simples de jogo da velha, Após a finalização de cada partida o aplicativo guarda a posicao de de X e O da partida no histórico, armazenando nesse os resultados de todas as partidas.",
      image: velha,
      github: "https://github.com/Julianafrego/jogo_da_velha_flutter"
    },
       {
      id: 1,
      title: "Intelecto quiz",
      description: "Aplicativo de perguntas e respostas que abrange diversas áreas do conhecimento. O usuário pode explorar diferentes categorias, testar seus conhecimentos e se desafiar com perguntas para cada tema.",
      image: intelectoquiz,
      github: "https://github.com/Julianafrego/intelecto_quiz",
      highlighted: true
    },

  ];

  return (
    <section id="projects" className="py-16 bg-[#F7F5FF] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-72 h-72 bg-[#A78BFA]/8 rounded-full blur-2xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-[#3F3A75] mb-8 text-center">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map(project => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-white/40"
            >
              <div className="h-56 w-full mb-4 overflow-hidden rounded-xl">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-semibold text-[#6D5DD8] mb-2">{project.title}</h3>
              <p className="text-[#5F5577] mb-4">{project.description}</p>

              <div className="flex gap-3 items-center">
                <Button
                  size="icon"
                  className={`w-10 h-10 rounded-xl transition-colors
                    ${project.github 
                      ? "bg-[#A78BFA] hover:bg-[#7C3AED] text-white cursor-pointer" 
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`
                  }
                  onClick={() => project.github && window.open(project.github, "_blank")}
                  disabled={!project.github}
                >
                  <Github size={20} />
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 border-[#A78BFA] text-[#3F3A75]"
                  onClick={() => project.site && window.open(project.site, "_blank")}
                  disabled={!project.site}
                >
                  {project.site ? "Acessar Site" : "Site indisponível"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
