import { PRECIO } from '../data/curso'

const fmt = (n) => new Intl.NumberFormat('es-CO').format(n)

export default function CTAFinal({ onInscribirse }) {
  return (
    <section style={{ textAlign: 'center', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, rgba(21,101,192,0.15) 0%, transparent 70%)' }} />
      <div className="section-label">Empieza hoy</div>
      <h2 className="montserrat" style={{ fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.5rem)', marginBottom: '1rem' }}>
        Transforma tu carrera<br />con datos reales
      </h2>
      <p style={{ color: '#94A3B8', marginBottom: '1.5rem' }}>Únete y domina Power Query, DAX y Big Data con Excel</p>
      <div className="montserrat" style={{ fontSize: '3rem', fontWeight: 900, color: '#1E88E5' }}>${fmt(PRECIO.actual)} COP</div>
      <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '2rem' }}>Pago único · Acceso inmediato · Sin mensualidades</div>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={onInscribirse} className="btn-wa"
          style={{ fontSize: '1.05rem', padding: '1rem 2.5rem', border: 'none', cursor: 'pointer' }}>
          <i className="ti ti-user-plus" /> Reservar mi cupo
        </button>
        <a href="/assets/temario.pdf" download="Temario_DanExcel.pdf"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: '1px solid rgba(30,136,229,0.4)', color: '#90CAF9', padding: '1rem 2rem', borderRadius: 8, fontSize: '0.95rem', fontFamily: 'Inter', textDecoration: 'none' }}>
          <i className="ti ti-download" /> Descargar temario PDF
        </a>
      </div>
      <p style={{ marginTop: '1rem', color: '#475569', fontSize: '0.8rem' }}>Te respondemos en menos de 2 horas</p>
    </section>
  )
}
