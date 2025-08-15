import React from 'react'
import ProjectCard from './ProjectCard'
import optiImg from '../assets/optihealth01.png'
import skinvideo from '../assets/skincancer01.mp4'
import shoeImg from '../assets/shoeverse01.png'

const projects = [
  {
    id: 'opti',
    title: 'OptiHealth — AI Eye Health App',
    desc: 'React Native + TensorFlow model for retinal disease detection. Firebase for backend and storage.',
    tech: 'React Native • Python • TensorFlow • Firebase',
    img: optiImg,
    github: 'https://github.com/DesignerHamza01/OptiHealth'
  },
  {
    id: 'skin',
    title: 'Skin Cancer Classification',
    desc: 'CNN using transfer learning on ISIC dataset for classifying dermoscopic images.',
    tech: 'TensorFlow • Transfer Learning • Data Augmentation',
    video: skinvideo,
    github: 'https://github.com/DesignerHamza01/Skin_Cancer_Classification'
  },
  {
    id: 'shoe',
    title: 'Shoeverse — eCommerce Website',
    desc: 'Full-stack eCommerce site: React frontend, Node.js/Express backend, MongoDB database.',
    tech: 'React • Node.js • Express • MongoDB',
    img: shoeImg,
    github: 'https://github.com/DesignerHamza01/ShoeVerse'
  },
]

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
