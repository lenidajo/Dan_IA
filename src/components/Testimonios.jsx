const testimonios = [
  {
    nombre: 'Laura Martínez',
    cargo: 'Analista Financiera · Bogotá',
    quote: 'Antes tardaba 3 horas armando reportes en Excel. Con Power Query y DAX lo hago en 15 minutos. Este curso cambió completamente mi flujo de trabajo.',
    inicial: 'L',
    color: '#1565C0'
  },
  {
    nombre: 'Carlos Herrera',
    cargo: 'Gerente de Operaciones · Medellín',
    quote: 'No sabía nada de DAX y en la semana 3 ya tenía mi primer dashboard dinámico para la junta directiva. Súper práctico, nada de teoría innecesaria.',
    inicial: 'C',
    color: '#0D47A1'
  },
  {
    nombre: 'Valentina Ríos',
    cargo: 'Coordinadora de Ventas · Cali',
    quote: 'El módulo de Power Pivot me permitió conectar fuentes de datos que antes procesaba a mano. Ahora mis reportes se actualizan solos. Vale cada peso.',
    inicial: 'V',
    color: '#1976D2'
  }
]

export default function Testimonios() {
  return (
    <section style={{ background: '#0A1628', padding: '5rem 2rem' }}>
      <div className="section-label">Lo que dicen los estudiantes</div>
      <div className="section-title" style={{ marginBottom: '0.4rem' }}>Resultados reales</div>
      <div className="section-sub">Profesionales que ya transformaron su trabajo con Excel</div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: '1.2rem', maxWidth: 1000, margin: '0 auto'
      }}>
        {testimonios.map((t) => (
          <div key={t.nombre} style={{
            background: '#0D1B2E', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'
          }}>
            {/* Estrellas */}
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ti ti-star-filled" style={{ color: '#F59E0B', fontSize: '0.85rem' }} />
              ))}
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>
              "{t.quote}"
            </p>

            {/* Autor */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{
                width: 42, height: 42, borderRadius: '50%',
                background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1rem', color: '#fff', flexShrink: 0
              }}>
                {t.inicial}
              </div>
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.88rem' }}>{t.nombre}</div>
                <div style={{ fontSize: '0.72rem', color: '#64748B' }}>{t.cargo}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dan3 CTA */}
      <div style={{
        maxWidth: 700, margin: '3rem auto 0',
        background: 'linear-gradient(135deg, #0D1B2E 0%, #0A1628 100%)',
        border: '1px solid rgba(30,136,229,0.2)', borderRadius: 16,
        padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem'
      }}>
        <img src="/assets/dan3.png" alt="Dan aprueba este curso"
          style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }} />
        <div>
          <div className="montserrat" style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>
            ¿Listo para el cambio?
          </div>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6 }}>
            Únete a los profesionales que ya usan DAX y Power Query para tomar mejores decisiones.
          </p>
        </div>
      </div>
    </section>
  )
}
