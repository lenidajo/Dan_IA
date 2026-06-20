export default function SobreMi() {
  const creds = ['Power Query (M)', 'DAX Avanzado', 'Power Pivot', 'SQL Server', 'Azure SQL', 'Big Data', 'Power BI', 'Automatización']

  return (
    <section style={{ background: '#0A1628', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '380px 1fr', gap: '4rem', alignItems: 'center' }}>

        {/* Foto */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: -12,
            background: 'linear-gradient(135deg, #1565C0 0%, transparent 60%)',
            borderRadius: 20, zIndex: 0
          }} />
          <img
            src="/assets/dan2.png"
            alt="Dan - Instructor DanExcel"
            style={{
              width: '100%', borderRadius: 16, position: 'relative', zIndex: 1,
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          />
          {/* Badge flotante */}
          <div style={{
            position: 'absolute', bottom: -16, right: -16, zIndex: 2,
            background: '#1565C0', borderRadius: 12, padding: '0.8rem 1.2rem',
            boxShadow: '0 8px 24px rgba(21,101,192,0.4)'
          }}>
            <div className="montserrat" style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff' }}>5+</div>
            <div style={{ fontSize: '0.7rem', color: '#90CAF9' }}>años de experiencia</div>
          </div>
        </div>

        {/* Texto */}
        <div>
          <div className="section-label" style={{ textAlign: 'left' }}>Tu instructor</div>
          <h2 className="montserrat" style={{ fontWeight: 900, fontSize: '2rem', marginBottom: '1rem' }}>
            Hola, soy <span style={{ color: '#1E88E5' }}>Dan</span>
          </h2>
          <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
            Analista de datos y consultor en inteligencia de negocios con más de 5 años transformando
            datos en decisiones estratégicas para empresas en Colombia y Latinoamérica.
          </p>
          <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Mi misión es que domines las mismas herramientas que usan los analistas de las
            empresas más grandes del mundo — sin necesidad de ser programador.
          </p>

          {/* Credenciales */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {creds.map(c => (
              <span key={c} style={{
                background: 'rgba(21,101,192,0.15)', color: '#90CAF9',
                border: '1px solid rgba(30,136,229,0.25)',
                padding: '0.3rem 0.8rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 500
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
