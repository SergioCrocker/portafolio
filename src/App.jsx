import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="app bg-light">
      <Hero />
      <div className="container mt-5">
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}
