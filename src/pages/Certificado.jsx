import { useState } from 'react'
import Navbar from '../components/Navbar'
import { LEMA } from '../data/curso'

export default function Certificado() {
  const [nombre, setNombre] = useState('Nombre del Estudiante')
  const [editando, setEditando] = useState(false)
  const [temp, setTemp] = useState('')

  const hoy = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', padding: '3rem 2rem', background: '#0A1628' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-label">Vista previa</div>
          <div className="section-title">Certificado de Finalización</div>
          <p style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Este certificado se entrega al completar las 18 lecciones del curso
          </p>
          {/* Input nombre */}
          <div style={{ marginTop: '1rem' }}>
            {editando ? (
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                <input value={temp} onChange={e => setTemp(e.target.value)}
                  placeholder="Escribe el nombre..."
                  style={{ background: '#0D1B2E', border: '1px solid rgba(30,136,229,0.4)', color: '#fff', padding: '0.5rem 1rem', borderRadius: 6, fontSize: '0.9rem', fontFamily: 'Inter', width: 280 }} />
                <button onClick={() => { setNombre(temp || 'Nombre del Estudiante'); setEditando(false) }}
                  style={{ background: '#1565C0', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: 6, cursor: 'pointer', fontFamily: 'Inter', fontSize: '0.85rem' }}>
                  Aplicar
                </button>
              </div>
            ) : (
              <button onClick={() => { setTemp(nombre); setEditando(true) }}
                style={{ background: 'transparent', border: '1px solid rgba(30,136,229,0.3)', color: '#90CAF9', padding: '0.4rem 1rem', borderRadius: 6, cursor: 'pointer', fontFamily: 'Inter', fontSize: '0.82rem' }}>
                ✏️ Personalizar nombre
              </button>
            )}
          </div>
        </div>

        {/* Certificado */}
        <div id="certificado" style={{
          maxWidth: 820, margin: '0 auto',
          background: 'linear-gradient(135deg, #0D1B2E 0%, #0A1628 100%)',
          border: '2px solid rgba(30,136,229,0.4)',
          borderRadius: 16, padding: '3rem',
          boxShadow: '0 0 60px rgba(21,101,192,0.2)',
          position: 'relative', overflow: 'hidden'
        }}>
          {/* Esquinas decorativas */}
          {[{top:0,left:0},{top:0,right:0},{bottom:0,left:0},{bottom:0,right:0}].map((pos,i)=>(
            <div key={i} style={{ position:'absolute', width:40, height:40, ...pos,
              borderTop: i<2 ? '3px solid #1E88E5' : 'none',
              borderBottom: i>=2 ? '3px solid #1E88E5' : 'none',
              borderLeft: i%2===0 ? '3px solid #1E88E5' : 'none',
              borderRight: i%2===1 ? '3px solid #1E88E5' : 'none',
            }} />
          ))}

          {/* Logos arriba */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <img src="/assets/logo.png" alt="DAN IA" style={{ height: 40, objectFit: 'contain' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: '#475569', letterSpacing: 2, textTransform: 'uppercase' }}>
                Certificado de Finalización
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="montserrat" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E88E5' }}>FLORES LA CONCHITA</div>
              <div style={{ fontSize: '0.65rem', color: '#475569' }}>& DAN IA</div>
            </div>
          </div>

          <div style={{ width: '100%', height: 1, background: 'rgba(30,136,229,0.2)', marginBottom: '2rem' }} />

          {/* Cuerpo */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748B', letterSpacing: 2, marginBottom: '0.8rem', textTransform: 'uppercase' }}>
              Flores La Conchita y DAN IA certifican que
            </div>

            <div className="montserrat" style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.2 }}>
              {nombre}
            </div>

            <div style={{ width: 200, height: 2, background: 'linear-gradient(90deg,transparent,#1E88E5,transparent)', margin: '1rem auto' }} />

            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 1.5rem' }}>
              completó y aprobó las <strong style={{ color: '#1E88E5' }}>18 lecciones</strong> del curso
            </p>

            <div className="montserrat" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
              Excel Power: Analiza y Transforma Datos
            </div>
            <div style={{ color: '#1E88E5', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              con DAX y Power Query
            </div>

            <div style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', background: 'rgba(21,101,192,0.1)', border: '1px solid rgba(30,136,229,0.2)', borderRadius: 8, display: 'inline-block' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748B', marginBottom: '0.2rem' }}>Implementación en:</div>
              <div style={{ fontSize: '0.82rem', color: '#90CAF9', fontWeight: 500 }}>
                Minería de Datos · Modelamiento · Visualización · Power Query · DAX
              </div>
            </div>
          </div>

          <div style={{ width: '100%', height: 1, background: 'rgba(30,136,229,0.2)', margin: '2rem 0 1.5rem' }} />

          {/* Firmas y lema */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 120, height: 1, background: '#334155', marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 600 }}>DAN IA</div>
              <div style={{ fontSize: '0.65rem', color: '#64748B' }}>Instructor · Analista de Datos</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="montserrat" style={{ color: '#1E88E5', fontStyle: 'italic', fontSize: '0.82rem', fontWeight: 500 }}>
                "{LEMA}"
              </div>
              <div style={{ fontSize: '0.65rem', color: '#475569', marginTop: '0.3rem' }}>{hoy}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 120, height: 1, background: '#334155', marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 600 }}>FLORES LA CONCHITA</div>
              <div style={{ fontSize: '0.65rem', color: '#64748B' }}>Empresa Patrocinadora</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>
            Al terminar el curso recibes este certificado personalizado con tu nombre
          </p>
        </div>
      </div>
    </>
  )
}
