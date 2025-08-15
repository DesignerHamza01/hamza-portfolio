import React from 'react'

const skills = [
  { title: 'Machine Learning', items: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV'] },
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JS'] },
  { title: 'Backend / DB', items: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
]

export default function Skills(){
  return (
    <section className="py-8">
      <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s.title} className="p-4 rounded-xl border bg-white shadow-sm">
            <div className="font-semibold mb-2">{s.title}</div>
            <ul className="text-sm text-gray-600 space-y-1">
              {s.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
