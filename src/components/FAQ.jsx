import { useState } from 'react'

const faqs = [
  {
    q: '¿Necesito conocimientos previos de Excel?',
    a: 'Sí, nivel intermedio. Debes saber usar fórmulas básicas (SUMA, PROMEDIO, SI) y haber creado al menos una tabla dinámica. El curso empieza reforzando esas bases antes de entrar a Power Query y DAX.'
  },
  {
    q: '¿Cuánto tiempo dura el curso?',
    a: 'El contenido tiene más de 18 lecciones distribuidas en 6 módulos. A un ritmo de 2-3 horas por semana, lo terminas en 6-8 semanas. El acceso es de por vida, así que avanzas a tu ritmo.'
  },
  {
    q: '¿Recibo certificado al terminar?',
    a: 'Sí. Al completar todos los módulos recibes un certificado digital de finalización firmado por DanExcel que puedes agregar a tu LinkedIn o hoja de vida.'
  },
  {
    q: '¿Con qué versión de Excel funciona?',
    a: 'Office 2016 o superior (Windows). Power Query y Power Pivot están disponibles desde Excel 2016. Se recomienda Microsoft 365 para tener acceso a BUSCARX y las últimas funciones DAX.'
  },
  {
    q: '¿Cómo accedo a las clases después de pagar?',
    a: 'Al inscribirte por WhatsApp, te enviamos el link de acceso al portal de clases en menos de 2 horas. Las grabaciones estarán disponibles 24/7 desde cualquier dispositivo.'
  },
  {
    q: '¿Puedo pagar en cuotas?',
    a: 'Por ahora el pago es único de $97.000 COP. Si necesitas otra modalidad, escríbenos por WhatsApp y buscamos una solución. El precio puede cambiar cuando suba el siguiente grupo.'
  }
]

export default function FAQ() {
  const [abierto, setAbierto] = useState(null)

  return (
    <section style={{ background: '#0D1B2E', padding: '5rem 2rem' }}>
      <div className="section-label">Preguntas frecuentes</div>
      <div className="section-title" style={{ color: '#fff', marginBottom: '2.5rem' }}>
        Todo lo que necesitas saber
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{
            background: '#0A1628',
            border: `1px solid ${abierto === i ? 'rgba(30,136,229,0.4)' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: 10, overflow: 'hidden', transition: 'border-color 0.2s'
          }}>
            <button
              onClick={() => setAbierto(abierto === i ? null : i)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.1rem 1.3rem', background: 'transparent', border: 'none',
                cursor: 'pointer', color: '#fff', fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem', fontWeight: 500, textAlign: 'left', gap: '1rem'
              }}
            >
              <span>{f.q}</span>
              <i className={`ti ${abierto === i ? 'ti-minus' : 'ti-plus'}`}
                style={{ color: '#1E88E5', flexShrink: 0, fontSize: '1rem' }} />
            </button>
            {abierto === i && (
              <div style={{
                padding: '0 1.3rem 1.2rem',
                color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.75
              }}>
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
