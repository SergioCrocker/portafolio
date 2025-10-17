import React from 'react'
import avatar from '../../images/1.jpeg'

export default function Hero(){
  return (
    <header className="hero-hero">
      <div className="container">
        <div className="hero-card hero-layout-left">
          <div className="hero-photo-col">
            <img src={avatar} alt="Sergio Otoniel Crocker - foto" className="hero-avatar hero-avatar-left" />
          </div>

          <div className="hero-main-col">
            <div className="hero-title-block">
              <h1 className="hero-title">Sergio Otoniel Crocker</h1>
            </div>

            <div className="hero-contact-card">
              <p className="hero-sub mb-2">Ingeniero en Sistemas | Portafolio Profesional</p>
              <div className="hero-contact-email">sergiootonielcrockercristales@gmail.com</div>
              <div className="tech-list mt-3">
                <span className="badge">React</span>
                <span className="badge">Vite</span>
                <span className="badge">Bootstrap</span>
                <span className="badge">Node.js</span>
                <span className="badge">SQL</span>
                <span className="badge">Testing</span>
                <span className="badge">Seguridad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
