import { modulos } from '../data/curso'

export default function Temario() {
  return (
    <section id="modulos" style={{ background: '#0D1B2E', padding: '4rem 2rem' }}>
      <div className="section-label">Contenido del curso</div>
      <div className="section-title" style={{ color: '#fff' }}>6 Módulos · De intermedio a experto</div>
      <div className="section-sub">Cada módulo incluye teoría, ejemplos prácticos y datos reales</div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
        gap: '1rem', maxWidth: 1000, margin: '0 auto'
      }}>
        {modulos.map((m) => (
          <div key={m.id} style={{
            background: '#0A1628', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 10, padding: '1.2rem',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(30,136,229,0.5)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
          >
            <div style={{ fontSize: '0.68rem', color: '#1E88E5', fontWeight: 500, letterSpacing: 1, marginBottom: '0.5rem' }}>
              MÓDULO {String(m.id).padStart(2, '0')}
            </div>
            <div className="montserrat" style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.35 }}>
              {m.titulo}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.6, marginBottom: '0.8rem' }}>
              {m.objetivo}
            </div>
            <ul style={{ paddingLeft: '1rem', marginBottom: '0.8rem' }}>
              {m.temas.map(t => (
                <li key={t} style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: 3 }}>{t}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {m.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
