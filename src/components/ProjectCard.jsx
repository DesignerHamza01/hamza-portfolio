import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }){
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white rounded-xl shadow-md overflow-hidden border w-full max-w-[700px]">
      <div className="w-[600px] h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden">
  {project.video ? (
    <video 
      src={project.video} 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="object-cover w-full h-full"
    />
  ) : (
    <img 
      src={project.img} 
      alt={project.title} 
      className="object-cover w-full h-full" 
    />
  )}
</div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
        <div className="text-xs text-gray-500 mt-3">{project.tech}</div>
        <div className="mt-4 flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50">
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}
