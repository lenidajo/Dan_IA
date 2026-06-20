import { useState } from 'react'

const dashboards = [
  {
    img: '/assets/dash1.png',
    titulo: 'Dashboard de Ventas + KPIs',
    desc: 'Power Pivot + DAX · KPIs en tiempo real, tendencia mensual y análisis por categoría'
  },
  {
    img: '/assets/dash2.png',
    titulo: 'Reporte Ejecutivo por Departamento',
    desc: 'Power Query + DAX · Tendencia mensual, cumplimiento y análisis de bajas por mercado'
  },
  {
    img: '/assets/dash3.png',
    titulo: 'Dashboard de Inventario con Segmentadores',
    desc: 'Power Pivot · Segmentación dinámica por producto, bloque y variedad con gráficos interactivos'
  }
]

export default function DashboardPreview() {
  const [activo, setActivo] = useState(0)

  return (
    <section style={{ padding: '5rem 2rem', background: '#0D1B2E' }}>
      <div className="section-label">Proyectos reales del instructor</div>
      <div className="section-title">Esto es lo que vas a poder crear</div>
      <div className="section-sub">Dashboards reales construidos con las herramientas del curso</div>

      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Imagen principal */}
        <div style={{
          borderRadius: 12, overflow: 'hidden',
          border: '1px solid rgba(30,136,229,0.2)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          marginBottom: '1.2rem', position: 'relative'
        }}>
          {/* Barra tipo app */}
          <div style={{
            background: '#060E1A', padding: '0.6rem 1rem',
            display: 'flex', alignItems: 'center', gap: 6,
            borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>
            {['#EF4444','#F59E0B','#22C55E'].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            ))}
            <span style={{ fontSize: '0.72rem', color: '#475569', marginLeft: 8 }}>
              {dashboards[activo].titulo} · Excel
            </span>
          </div>
          <img
            src={dashboards[activo].img}
            alt={dashboards[activo].titulo}
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        {/* Descripción activa */}
        <div style={{
          textAlign: 'center', marginBottom: '1.5rem',
          color: '#94A3B8', fontSize: '0.88rem'
        }}>
          <span style={{ color: '#1E88E5', fontWeight: 500 }}>{dashboards[activo].titulo}</span>
          {' · '}{dashboards[activo].desc.split('·')[1]}
        </div>

        {/* Thumbnails */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.8rem' }}>
          {dashboards.map((d, i) => (
            <button key={i} onClick={() => setActivo(i)}
              style={{
                background: 'transparent', border: `2px solid ${activo === i ? '#1E88E5' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 8, overflow: 'hidden', cursor: 'pointer', padding: 0,
                transition: 'border-color 0.2s', opacity: activo === i ? 1 : 0.5
              }}>
              <img src={d.img} alt={d.titulo} style={{ width: '100%', display: 'block' }} />
            </button>
          ))}
        </div>

        {/* Flechas navegación */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
          <button onClick={() => setActivo(a => (a - 1 + dashboards.length) % dashboards.length)}
            style={{
              background: 'rgba(21,101,192,0.15)', border: '1px solid rgba(30,136,229,0.3)',
              color: '#90CAF9', borderRadius: 8, padding: '0.5rem 1.2rem',
              cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Inter'
            }}>
            ← Anterior
          </button>
          <button onClick={() => setActivo(a => (a + 1) % dashboards.length)}
            style={{
              background: 'rgba(21,101,192,0.15)', border: '1px solid rgba(30,136,229,0.3)',
              color: '#90CAF9', borderRadius: 8, padding: '0.5rem 1.2rem',
              cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Inter'
            }}>
            Siguiente →
          </button>
        </div>
      </div>
    </section>
  )
}
