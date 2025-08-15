import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t">
      <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hamza Owais — Machine Learning & Full-Stack Developer
      </div>
    </footer>
  )
}
