import React from 'react'

export default function Skills(){
  const tech = [
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' }
  ]

  const categories = {
    'Frontend': '#06b6d4',
    'Backend': '#10b981',
    'Database': '#8b5cf6'
  }

  return (
    <section className="my-5">
      <h3 style={{
        color: 'var(--secondary-teal)',
        fontWeight: '800',
        fontSize: '2rem',
        marginBottom: '2rem',
        position: 'relative'
      }}>
        Tecnologías y Habilidades
        <span style={{
          position: 'absolute',
          bottom: '-8px',
          left: '0',
          width: '60px',
          height: '3px',
          background: 'var(--gradient-accent)',
          borderRadius: '2px'
        }}></span>
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {Object.entries(categories).map(([category, color]) => (
          <div key={category} style={{
            background: `rgba(${color === '#06b6d4' ? '6, 182, 212' : color === '#10b981' ? '16, 185, 129' : '139, 92, 246'}, 0.05)`,
            borderRadius: '16px',
            padding: '1.5rem',
            border: `2px solid ${color}20`
          }}>
            <h4 style={{
              color: color,
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              {category}
            </h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {tech
                .filter(t => t.category === category)
                .map((t, i) => (
                  <span
                    key={i}
                    style={{
                      background: `linear-gradient(135deg, ${color}20, ${color}40)`,
                      color: color,
                      border: `1px solid ${color}40`,
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'var(--transition-normal)',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${color}, ${color})`
                      e.target.style.color = 'white'
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${color}20, ${color}40)`
                      e.target.style.color = color
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    {t.name}
                  </span>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
