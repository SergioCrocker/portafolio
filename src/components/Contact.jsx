import React from 'react'

export default function Contact() {
    return (
        <section className="my-5">
            <h3 style={{
                color: 'var(--secondary-teal)',
                fontWeight: '800',
                fontSize: '2rem',
                marginBottom: '2rem',
                position: 'relative'
            }}>
                Información de Contacto
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
                display: 'flex',
                gap: '1.5rem',
                marginTop: '2rem',
                alignItems: 'stretch'
            }}>
                <div className="card contact-horizontal" style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '20px',
                    padding: '1.25rem',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    {/* Avatar column */}
                    <div style={{
                        minWidth: '140px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <img
                            src="/images/1.jpeg"
                            alt="Sergio Otoniel Crocker - Ingeniero en Sistemas"
                            className="rounded-circle"
                            style={{
                                width: '120px',
                                height: '120px',
                                objectFit: 'cover',
                                border: '4px solid var(--secondary-teal)'
                            }}
                        />
                        {/* age badge overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '22px',
                            minWidth: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--accent-emerald)',
                            color: 'var(--primary-deep)',
                            borderRadius: '10px',
                            fontWeight: 800,
                            boxShadow: 'none'
                        }}>24</div>
                    </div>

                    {/* Details column */}
                    <div style={{ flex: 1 }}>
                        <h5 style={{
                            color: '#e2e8f0',
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            marginBottom: '0.25rem'
                        }}>Sergio Otoniel Crocker</h5>

                        <div style={{
                            color: 'var(--neutral-slate)',
                            fontSize: '1rem',
                            marginBottom: '0.75rem',
                            lineHeight: '1.5'
                        }}>
                            <div>💻 Tecnologías web - 🗄️ Especialista en bases de datos</div>
                        </div>
                        <div style={{
                            color: '#cbd5e1',
                            lineHeight: '1.6',
                            marginBottom: '1rem'
                        }}>
                            <p style={{ marginBottom: '0.5rem' }}>
                                <strong>Estado:</strong> <span style={{ color: 'var(--accent-emerald)' }}>Disponible para proyectos</span>
                            </p>
                            <p style={{ marginBottom: '0.5rem' }}>
                                <strong>Especialidades:</strong> • Desarrollo web full-stack • Diseño y optimización de bases de datos • Testing y calidad de software • Seguridad informática
                            </p>
                            <p style={{ marginBottom: '0' }}><strong>Ubicación:</strong> Guatemala, GT</p>
                        </div>

                        <div style={{
                            background: 'rgba(6, 182, 212, 0.05)',
                            borderRadius: '12px',
                            padding: '0.9rem',
                            borderLeft: '4px solid var(--secondary-teal)',
                            maxWidth: '70%'
                        }}>
                            <p style={{
                                color: 'var(--neutral-slate)',
                                fontSize: '0.9rem',
                                margin: '0',
                                fontStyle: 'italic'
                            }}>
                                "Comprometido con la excelencia técnica y la innovación constante en el desarrollo de software."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
