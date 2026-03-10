import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

import {
  intelectoquiz,
  voley,
  imc,
  xitoque,
  velha,
  les,
  bmm,
  canvas,
  documentacao,
  map,
  cafeconcentrado,
} from '../projects/imports.jsx';

import ProjectModal from '../model/ProjectModel.jsx';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 8,
      title: "BMMWEB",
      description:
        "Plataforma web voltada à criação e comparação de modelos de negócios, desenvolvida para tornar o processo de modelagem mais intuitivo e estruturado. Atuo há mais de um ano na continuidade e evolução do sistema, com participação full stack em frontend, backend, integrações, modelagem de banco de dados, criação de CRUDs, desenvolvimento de novas telas e deploy da aplicação.",
      image: bmm,
      images: [bmm, canvas, documentacao, map],
      site: "https://bmm.prp.uespi.br/",
      tags: ["React", "Node.js", "FastApi", "PostgreSQL", "Docker", "Figma"],
    },
    {
      id: 7,
      title: "Portfolio - LES",
      description:
        "Site institucional desenvolvido para apresentar os projetos e resultados do Laboratório de Engenharia de Software da UESPI. Atuei na prototipação, construção das interfaces e integração frontend, transformando requisitos em telas funcionais e responsivas.",
      image: les,
      images: [les],
      tags: ["React", "Tailwind CSS", "Figma", "TypeScript"],
    },
    {
      id: 6,
      title: "Café Concentrado",
      description:
        "Aplicação web inspirada na técnica Pomodoro, com temporizador configurável por sessões de foco e pausa, além de gerenciamento de tarefas. Desenvolvi o projeto de ponta a ponta, implementando frontend, backend, CRUDs e regras de funcionamento da aplicação.",
      image: cafeconcentrado,
      images: [cafeconcentrado],
      github: "https://github.com/Julianafrego/pomodoro-cafe-concentrado",
      tags: ["Angular", "Spring Boot", "Tailwind CSS", "Java", "TypeScript"],
    },
    {
      id: 1,
      title: "Intelecto quiz",
      description:
        "Aplicativo de perguntas e respostas com múltiplas categorias, desenvolvido com consumo de APIs externas para enriquecer a experiência do usuário. A aplicação integra uma API de frases para exibir conteúdos dinâmicos na tela inicial e outra para carregar perguntas e respostas dos quizzes, demonstrando integração com serviços externos e tratamento de dados no app.",
      image: intelectoquiz,
      images: [intelectoquiz],
      github: "https://github.com/Julianafrego/intelecto_quiz",
      highlighted: true,
      tags: ["Flutter", "Dart", "API Integration"],
    },
    {
      id: 5,
      title: "Jogo da velha",
      description:
        "Aplicativo mobile do jogo da velha com armazenamento local do histórico das partidas. Além da lógica do jogo, implementei persistência em banco local para registrar resultados anteriores, vencedor de cada partida e posições finais associadas às vitórias.",
      image: velha,
      images: [velha],
      github: "https://github.com/Julianafrego/jogo_da_velha_flutter",
      tags: ["Flutter", "Dart", "Local Storage"],
    },
    {
      id: 4,
      title: "Xitoque",
      description:
        "Aplicativo infantil interativo voltado ao aprendizado musical, com interface colorida e acessível, permitindo a exploração de sons por meio de mini teclado virtual. O projeto foi desenvolvido com foco em experiência lúdica, organização visual e interação simples para o público infantil.",
      image: xitoque,
      images: [xitoque],
      github: "https://github.com/Julianafrego/xitoque_app",
      tags: ["Flutter", "Dart"],
    },
    {
      id: 2,
      title: "Voley app",
      description:
        "Aplicativo mobile desenvolvido para registrar e acompanhar a pontuação de partidas de vôlei em tempo real, oferecendo uma solução simples e prática para controle do placar durante o jogo.",
      image: voley,
      images: [voley],
      github: "https://github.com/Julianafrego/volley_app",
      tags: ["Flutter", "Dart"],
    },
    {
      id: 3,
      title: "BMI Calculator",
      description:
        "Aplicativo mobile para cálculo de IMC, desenvolvido para fornecer ao usuário uma análise simples e objetiva a partir de dados como idade, sexo, peso e altura. Implementei a lógica da aplicação, telas e a organização dos dados exibidos na interface.",
      image: imc,
      images: [imc],
      github: "https://github.com/Julianafrego/imc_app",
      tags: ["Flutter", "Dart"],
    }
  ];

  return (
    <section id="projects" className="py-16 bg-[#F7F5FF] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-72 h-72 bg-[#A78BFA]/8 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-[#3F3A75] mb-8 text-center">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-white/40 flex flex-col h-full"
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="text-left"
              >
                <div className="h-56 w-full mb-4 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-[#6D5DD8] mb-2">
                  {project.title}
                </h3>

                <p className="text-[#5F5577] mb-4 line-clamp-4">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full border border-[#D6CCFF] bg-[#F3EEFF] text-[#6D5DD8] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </button>

              <div className="flex gap-3 items-center mt-auto">
                <Button
                  size="icon"
                  className={`w-10 h-10 rounded-xl transition-colors ${
                    project.github
                      ? "bg-[#A78BFA] hover:bg-[#7C3AED] text-white cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  onClick={() => project.github && window.open(project.github, "_blank")}
                  disabled={!project.github}
                >
                  <Github size={20} />
                </Button>

                <Button
                  variant="outline"
                  className={`flex-1 ${
                    project.site
                      ? "border-[#A78BFA] text-[#3F3A75]"
                      : "border-gray-300 text-gray-400 cursor-not-allowed"
                  }`}
                  onClick={() => project.site && window.open(project.site, "_blank")}
                  disabled={!project.site}
                >
                  {project.site ? (
                    <span className="flex items-center gap-2">
                      <Globe size={16} />
                      Acessar Site
                    </span>
                  ) : (
                    "Site indisponível"
                  )}
                </Button>

                <Button
                  variant="outline"
                  className="border-[#A78BFA] text-[#3F3A75]"
                  onClick={() => setSelectedProject(project)}
                >
                  Ver mais
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;