import React from 'react'
import { motion } from 'framer-motion'
import optiLogo from '../assets/Optihealth-logo.png'

export default function Hero(){
  return (
    <section id="home" className="pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold">
            Hamza Owais
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-gray-700">
            Machine Learning & Full-Stack Developer. I build AI-powered applications and responsive web solutions.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <a href="/resume.pdf" className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:opacity-95">Download Resume</a>
            <a href="#projects" className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">View Projects</a>
          </div>

          <div className="mt-6 flex gap-4 text-sm text-gray-600">
            <div><strong>Location:</strong> Karachi, Pakistan</div>
            <div>|</div>
            <div><strong>Email:</strong> hamzaowais9@gmail.com</div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img 
            src={optiLogo} 
            alt="OptiHealth Logo" 
            className="w-64 h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
