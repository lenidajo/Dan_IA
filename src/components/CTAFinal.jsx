import { WHATSAPP_URL, PRECIO } from '../data/curso'

const fmt = (n) => new Intl.NumberFormat('es-CO').format(n)

export default function CTAFinal() {
  return (
    <section style={{ textAlign: 'center', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(21,101,192,0.15) 0%, transparent 70%)'
      }} />

      <div className="section-label">Empieza hoy</div>
      <h2 className="montserrat" style={{ fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.5rem)', marginBottom: '1rem' }}>
        Transforma tu carrera<br />con datos reales
      </h2>
      <p style={{ color: '#94A3B8', marginBottom: '1.5rem' }}>
        Únete y domina Power Query, DAX y Big Data con Excel
      </p>

      <div className="montserrat" style={{ fontSize: '3rem', fontWeight: 900, color: '#1E88E5' }}>
        ${fmt(PRECIO.actual)} COP
      </div>
      <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '2rem' }}>
        Pago único · Acceso inmediato · Sin mensualidades
      </div>

      <a className="btn-wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer"
        style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
        <i className="ti ti-brand-whatsapp" aria-hidden="true" />
        Inscribirme por WhatsApp
      </a>

      <p style={{ marginTop: '1rem', color: '#475569', fontSize: '0.8rem' }}>
        Te respondemos en menos de 2 horas
      </p>
    </section>
  )
}
