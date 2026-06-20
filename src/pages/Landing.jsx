import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DashboardPreview from '../components/DashboardPreview'
import Temario from '../components/Temario'
import SobreMi from '../components/SobreMi'
import Testimonios from '../components/Testimonios'
import FAQ from '../components/FAQ'
import CTAFinal from '../components/CTAFinal'
import { WHATSAPP_URL } from '../data/curso'

const porques = [
  { icon: 'ti-database', titulo: 'ETL sin programar', texto: 'Automatiza limpieza de datos con Power Query. Horas de trabajo en minutos.' },
  { icon: 'ti-chart-bar', titulo: 'Dashboards que venden', texto: 'Reportes interactivos con KPIs que cualquier directivo entiende al instante.' },
  { icon: 'ti-cpu', titulo: 'Millones de filas', texto: 'Con Power Pivot superas el límite de Excel y conectas con SQL Server y Azure.' },
  { icon: 'ti-clock', titulo: 'Acceso de por vida', texto: 'Repasa las clases grabadas las veces que quieras. Sin fecha de vencimiento.' },
]

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Por qué */}
      <section style={{ background: '#0D1B2E', padding: '4rem 2rem' }}>
        <div className="section-label">¿Por qué este curso?</div>
        <div className="section-title" style={{ color: '#fff', marginBottom: '2rem' }}>
          Diseñado para resultados, no para teoría
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
          {porques.map(p => (
            <div key={p.titulo} style={{
              background: '#0A1628', borderRadius: 10, padding: '1.3rem',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <i className={`ti ${p.icon}`} style={{ color: '#1E88E5', fontSize: '1.5rem' }} />
              <div className="montserrat" style={{ fontWeight: 700, fontSize: '0.9rem', margin: '0.6rem 0 0.3rem' }}>{p.titulo}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.6 }}>{p.texto}</div>
            </div>
          ))}
        </div>
      </section>

      <DashboardPreview />
      <Temario />
      <SobreMi />
      <Testimonios />
      <FAQ />
      <CTAFinal />

      <footer style={{
        background: '#060E1A', padding: '2rem', textAlign: 'center',
        color: '#334155', fontSize: '0.8rem',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div>© 2025 <span style={{ color: '#1E88E5' }}>DanExcel</span> · Flores La Conchita · Curso Excel Power</div>
        <div style={{ marginTop: '0.4rem' }}>
          Dudas:{' '}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ color: '#25D366' }}>
            WhatsApp +57 320 937 3528
          </a>
        </div>
      </footer>
    </>
  )
}
