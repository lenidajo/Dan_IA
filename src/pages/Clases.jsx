import { useState } from 'react'
import Navbar from '../components/Navbar'
import { modulos, WHATSAPP_URL } from '../data/curso'

export default function Clases() {
  const [moduloActivo, setModuloActivo] = useState(1)
  const [claseActiva, setClaseActiva] = useState(null)

  const modActual = modulos.find(m => m.id === moduloActivo)

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
        <h1 className="montserrat" style={{ fontWeight: 700, fontSize: '1.6rem', marginBottom: '0.3rem' }}>
          Portal de Clases
        </h1>
        <p style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '2rem' }}>
          Repasa todas las lecciones grabadas · Acceso de por vida
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '1.5rem' }}>
          {/* Sidebar módulos */}
          <div>
            {modulos.map(m => (
              <button key={m.id} onClick={() => { setModuloActivo(m.id); setClaseActiva(null) }}
                style={{
                  width: '100%', textAlign: 'left', background: moduloActivo === m.id ? 'rgba(21,101,192,0.2)' : 'transparent',
                  border: `1px solid ${moduloActivo === m.id ? 'rgba(30,136,229,0.5)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 8, padding: '0.8rem 1rem', marginBottom: '0.5rem',
                  cursor: 'pointer', color: '#fff', fontFamily: 'Inter, sans-serif'
                }}>
                <div style={{ fontSize: '0.65rem', color: '#1E88E5', fontWeight: 500, marginBottom: 3 }}>
                  MÓDULO {String(m.id).padStart(2, '0')}
                </div>
                <div style={{ fontSize: '0.82rem', lineHeight: 1.35 }}>{m.titulo}</div>
                <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: 4 }}>
                  {m.clases.length} lecciones
                </div>
              </button>
            ))}
          </div>

          {/* Contenido */}
          <div>
            {claseActiva ? (
              /* Player */
              <div>
                <button onClick={() => setClaseActiva(null)}
                  style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '0.85rem', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>
                  <i className="ti ti-arrow-left" aria-hidden="true" /> Volver al módulo
                </button>
                <div style={{ background: '#0D1B2E', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {/* Video embed o placeholder */}
                  {claseActiva.videoId ? (
                    <iframe
                      width="100%" height="400"
                      src={`https://www.youtube.com/embed/${claseActiva.videoId}`}
                      title={claseActiva.titulo}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div style={{
                      height: 380, display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', gap: '1rem',
                      background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2E 100%)'
                    }}>
                      <i className="ti ti-video-off" style={{ fontSize: '2.5rem', color: '#1565C0' }} aria-hidden="true" />
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 500, marginBottom: '0.4rem' }}>Clase próximamente disponible</div>
                        <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                          Inscríbete para acceder cuando se publique
                        </div>
                      </div>
                      <a className="btn-wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                        <i className="ti ti-brand-whatsapp" aria-hidden="true" /> Inscribirme
                      </a>
                    </div>
                  )}
                  <div style={{ padding: '1.2rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#1E88E5', marginBottom: 4 }}>{claseActiva.id}</div>
                    <div className="montserrat" style={{ fontWeight: 700, fontSize: '1.1rem' }}>{claseActiva.titulo}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: 4 }}>
                      <i className="ti ti-clock" aria-hidden="true" /> {claseActiva.duracion}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Lista de clases del módulo */
              <div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ fontSize: '0.7rem', color: '#1E88E5', fontWeight: 500, marginBottom: 4 }}>
                    MÓDULO {String(modActual.id).padStart(2, '0')}
                  </div>
                  <div className="montserrat" style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.3rem' }}>
                    {modActual.titulo}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B' }}>{modActual.objetivo}</div>
                </div>

                {modActual.clases.map((c, idx) => (
                  <div key={c.id} onClick={() => setClaseActiva(c)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      background: '#0D1B2E', border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 8, padding: '1rem 1.2rem', marginBottom: '0.6rem',
                      cursor: 'pointer', transition: 'border-color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(30,136,229,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', background: '#1565C0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <i className="ti ti-player-play" style={{ fontSize: 14, color: '#fff' }} aria-hidden="true" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.62rem', color: '#64748B', marginBottom: 2 }}>{c.id}</div>
                      <div style={{ fontSize: '0.88rem' }}>{c.titulo}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: '#475569', whiteSpace: 'nowrap' }}>
                      <i className="ti ti-clock" aria-hidden="true" /> {c.duracion}
                    </div>
                    <span style={{
                      background: c.videoId ? 'rgba(34,197,94,0.1)' : 'rgba(21,101,192,0.15)',
                      color: c.videoId ? '#22c55e' : '#90CAF9',
                      fontSize: '0.62rem', padding: '2px 8px', borderRadius: 4,
                      border: `1px solid ${c.videoId ? 'rgba(34,197,94,0.3)' : 'rgba(30,136,229,0.2)'}`,
                      whiteSpace: 'nowrap'
                    }}>
                      {c.videoId ? 'Disponible' : 'Próximamente'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
