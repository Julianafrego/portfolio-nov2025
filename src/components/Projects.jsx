import React from 'react';
import { Button } from '@/components/ui/button.jsx';
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
      id: 1,
      title: "Intelecto quiz",
      description: "Aplicativo de perguntas e respostas que abrange diversas áreas do conhecimento. O usuário pode explorar diferentes categorias, testar seus conhecimentos e se desafiar com perguntas para cada tema.",
      image: intelectoquiz,
      link: "https://github.com/Julianafrego/intelecto_quiz",
      highlighted: true
    },
    {
      id: 2,
      title: "Voley app",
      description: "Aplicativo para acompanhar e contabilizar pontos realizados pelos times em uma partida de vôlei, permitindo registrar o placar em tempo real e facilitar o controle de forma simples e prática durante o jogo.",
      image: voley,
      link: "https://github.com/Julianafrego/volley_app"
    },
    {
      id: 3,
      title: "BMI Calculator", 
      description: "Aplicativo para calcular o IMC e indicar se a pessoa está abaixo do peso, no peso ideal ou com sobrepeso. Para realizar a análise, o app solicita informações como sexo, idade, peso e altura, oferecendo um resultado claro e fácil de entender.",
      image: imc,
      link: "https://github.com/Julianafrego/imc_app"
    },
    {
      id: 4,
      title: "Xitoque",
      description: "Aplicativo infantil com cores vibrantes e interface simples, que permite tocar dois instrumentos: um xilofone com 7 teclas, do dó ao si, e um mini teclado com 12 teclas, proporcionando diversão e aprendizado musical.",
      image: xitoque,
      link: "https://github.com/Julianafrego/xitoque_app"
    },
    {
      id: 5,
      title: "Jogo da velha",
      description: "O aplicativo consiste em um jogo simples de jogo da velha, Após a finalização de cada partida o aplicativo guarda a posicao de de X e O da partida no histórico, armazenando nesse os resultados de todas as partidas.",
      image: velha,
      link: "https://github.com/Julianafrego/jogo_da_velha_flutter"
    },
    {
      id: 6,
      title: "nome do projeto",
      description: "Jogo clássico de matar moscas, com três níveis de dificuldade: fácil, médio e difícil. O jogador possui três vidas e deve eliminar o máximo de moscas possível até a finalização do tempo no cronometro, evitando perder suas vidas.",
      image: mosca,
      link: "https://github.com/Julianafrego/game-mata-mosquito"
    },
    {
      id: 7,
      title: "Portfolio - LES",
      description: "Site desenvolvido para o Laboratório de Engenharia de Software da UESPI - Campus Piripiri, que apresenta projetos, publicações, participantes e parceiros, destacando as atividades e conquistas do laboratório.",
      image: les,
    },
    {
      id: 8,
      title: "BMMWEB",
      description: "Site desenvolvido para permitir criação e comparação de modelos de negócios de forma simplificada e intuitiva, através da seleção de padrões predefinidos. A ferramenta terá versão atualizada disponível em breve, nos idiomas português-br e inglês.",
      image: bmm
    },

  ];

  return (
    <section id="projects" className="py-16 bg-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-50">
            Meus Projetos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                  project.highlighted ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      disabled={!project.link} 
                      onClick={() => {
                        if (project.link) window.open(project.link, "_blank");
                      }}
                    >
                      {project.link ? "Visualizar" : "Não disponível no momento"}             
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

