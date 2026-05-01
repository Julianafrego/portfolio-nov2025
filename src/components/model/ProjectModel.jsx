import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Globe } from "lucide-react";


const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white w-full max-w-6xl h-full max-h-[70vh] rounded-2xl shadow-xl overflow-hidden relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>


          <div className="grid md:grid-cols-2 gap-0 items-center h-full">

            <div className="bg-gray-100 h-full flex flex-col items-center justify-center p-4">
            <div className="w-full h-[45vh] flex items-center justify-center">
                <img
                src={project.images[currentImage]}
                alt={project.title}
                className="max-w-full max-h-full object-contain rounded-xl"
                />
            </div>

            {project.images.length > 1 && (
                <div className="flex items-center gap-3 mt-4">
                <button
                    onClick={prevImage}
                    className="px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                    ←
                </button>
                <span className="text-sm text-gray-600">
                    {currentImage + 1} / {project.images.length}
                </span>
                <button
                    onClick={nextImage}
                    className="px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                    →
                </button>
                </div>
            )}

            <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {project.images.map((img, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    currentImage === index
                        ? 'border-[#6D5DD8]'
                        : 'border-transparent'
                    }`}
                >
                    <img
                    src={img}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover"
                    />
                </button>
                ))}
            </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#3F3A75] mb-4">
                {project.title}
              </h3>

              <p className="text-[#5F5577] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-[#F3F0FF] text-[#6D5DD8] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
               
               <div className='flex gap-3'>
                {project.github && (
                  <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6D5DD8] text-white font-medium hover:opacity-90"
                  >
                  <Github size={18} />
                  Acessar Github
                  </a>                
                )}
                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6D5DD8] text-white font-medium hover:opacity-90"
                  >
                    <Globe size={18} />
                    Acessar site
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;