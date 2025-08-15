import React from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar(){
  return (
    <nav className="w-full fixed top-0 left-0 backdrop-blur-md bg-white/60 z-50 border-b">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-semibold text-lg">Hamza Owais</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            <Link to="home" smooth className="cursor-pointer hover:text-primary">Home</Link>
            <Link to="about" smooth className="cursor-pointer hover:text-primary">About</Link>
            <Link to="projects" smooth className="cursor-pointer hover:text-primary">Projects</Link>
            <Link to="contact" smooth className="cursor-pointer hover:text-primary">Contact</Link>
          </div>
          <a href="https://github.com/DesignerHamza01" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hamza-owais-25b84221a" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  )
}
