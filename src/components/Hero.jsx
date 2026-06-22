import { PRECIO } from '../data/curso'

const fmt = (n) => new Intl.NumberFormat('es-CO').format(n)

export default function Hero({ onInscribirse }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0A1628' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(21,101,192,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(21,101,192,0.1) 1px,transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '3rem', alignItems: 'center', position: 'relative' }}>
        <div>
          <div style={{ display: 'inline-block', background: 'rgba(30,136,229,0.12)', border: '1px solid rgba(30,136,229,0.35)', color: '#90CAF9', padding: '0.3rem 1rem', borderRadius: 20, fontSize: '0.72rem', fontWeight: 500, marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
            EXCEL POWER · INTERMEDIO → AVANZADO
          </div>
          <h1 className="montserrat" style={{ fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Analiza y Transforma<br />
            <span style={{ color: '#1E88E5' }}>Datos con DAX</span><br />
            y Power Query
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 480 }}>
            De usuario intermedio a experto en Business Intelligence. Power Query, Power Pivot, DAX y Big Data — todo en Excel.
          </p>
          <div style={{ marginBottom: '1.8rem', display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
            <span style={{ color: '#64748B', textDecoration: 'line-through', fontSize: '0.9rem' }}>${fmt(PRECIO.anterior)} COP</span>
            <span className="montserrat" style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1E88E5' }}>${fmt(PRECIO.actual)}</span>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>COP · pago único</span>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <button onClick={onInscribirse} className="btn-wa"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem', border: 'none', cursor: 'pointer' }}>
              <i className="ti ti-user-plus" /> Reservar mi cupo
            </button>
            <button className="btn-primary"
              onClick={() => document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ fontSize: '1rem', padding: '0.9rem 2rem', background: 'transparent', border: '1px solid rgba(30,136,229,0.4)', color: '#90CAF9', cursor: 'pointer' }}>
              Ver temario <i className="ti ti-arrow-down" />
            </button>
          </div>
          <a href="/assets/temario.pdf" download="Temario_DanExcel.pdf"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#64748B', fontSize: '0.82rem', textDecoration: 'none', marginBottom: '2rem' }}>
            <i className="ti ti-download" style={{ fontSize: '0.85rem' }} /> Descargar temario completo (PDF)
          </a>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[['6','Módulos'],['18+','Lecciones'],['100%','Práctico'],['∞','Acceso']].map(([n,l]) => (
              <div key={l}>
                <div className="montserrat" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1E88E5' }}>{n}</div>
                <div style={{ fontSize: '0.72rem', color: '#64748B' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(21,101,192,0.25) 0%, transparent 70%)', borderRadius: '50%' }} />
          <img src="/assets/dan1.png" alt="DanExcel"
            style={{ width: '100%', maxWidth: 400, borderRadius: 16, position: 'relative', zIndex: 1, boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }} />
        </div>
      </div>
    </section>
  )
}
