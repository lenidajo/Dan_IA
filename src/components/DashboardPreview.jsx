import { useEffect, useRef } from 'react'

const kpis = [
  { label: 'Ventas Totales (YTD)', val: '$1.24M', delta: '▲ 18% vs año anterior', color: '#1E88E5' },
  { label: 'Margen de Beneficio', val: '34.2%', delta: '▲ 2.1pp vs anterior', color: '#22c55e' },
  { label: 'Clientes Activos', val: '2,847', delta: '▲ 312 nuevos', color: '#1E88E5' },
  { label: 'Ticket Promedio', val: '$436', delta: '▲ 5% vs anterior', color: '#22c55e' },
]

const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
const vals   = [65,72,58,81,90,76,95,88,102,115,98,124]

export default function DashboardPreview() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const max = Math.max(...vals)
    const W = canvas.width, H = canvas.height
    const barW = (W - 32) / meses.length - 4

    ctx.clearRect(0, 0, W, H)
    vals.forEach((v, i) => {
      const bh = ((v / max) * (H - 24))
      const x = 16 + i * ((W - 32) / meses.length)
      const y = H - 20 - bh
      ctx.fillStyle = '#1565C0'
      ctx.beginPath()
      ctx.roundRect(x, y, barW, bh, [3, 3, 0, 0])
      ctx.fill()
      ctx.fillStyle = '#475569'
      ctx.font = '9px Inter, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(meses[i], x + barW / 2, H - 4)
    })
  }, [])

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <div className="section-label">Lo que vas a construir</div>
      <div className="section-title">Dashboards reales, datos reales</div>
      <div className="section-sub">Al terminar el curso crearás reportes interactivos como este</div>

      <div style={{
        background: '#0F1E35', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12, overflow: 'hidden', maxWidth: 860, margin: '0 auto'
      }}>
        {/* Barra de título */}
        <div style={{
          background: '#0D1B2E', padding: '0.75rem 1.2rem',
          display: 'flex', alignItems: 'center', gap: 6,
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
          {['#EF4444','#F59E0B','#22C55E'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
          <span style={{ fontSize: '0.75rem', color: '#475569', marginLeft: 6 }}>
            Dashboard Ventas 2024 — Power Pivot + DAX
          </span>
        </div>

        {/* KPIs */}
        <div style={{ padding: '1.2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '0.8rem' }}>
          {kpis.map(k => (
            <div key={k.label} style={{
              background: '#0A1628', border: '1px solid rgba(30,136,229,0.2)',
              borderRadius: 8, padding: '1rem'
            }}>
              <div style={{ fontSize: '0.68rem', color: '#64748B', marginBottom: 4 }}>{k.label}</div>
              <div className="montserrat" style={{ fontSize: '1.4rem', fontWeight: 700, color: k.color }}>{k.val}</div>
              <div style={{ fontSize: '0.68rem', color: '#22c55e', marginTop: 2 }}>{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div style={{ padding: '0 1.2rem 1.2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.8rem' }}>
          <div style={{ background: '#0A1628', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '1rem' }}>
            <div style={{ fontSize: '0.68rem', color: '#64748B', marginBottom: 8 }}>Ventas por Mes 2024</div>
            <canvas ref={canvasRef} width={480} height={100} style={{ width: '100%', height: 100 }} />
          </div>
          <div style={{ background: '#0A1628', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <svg viewBox="0 0 80 80" width={80} height={80}>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#1565C0" strokeWidth="14" strokeDasharray="75 113" strokeDashoffset="0"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#1E88E5" strokeWidth="14" strokeDasharray="38 113" strokeDashoffset="-75"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#0D47A1" strokeWidth="14" strokeDasharray="25 113" strokeDashoffset="-113"/>
            </svg>
            {[['#1565C0','Tecnología 40%'],['#1E88E5','Servicios 34%'],['#0D47A1','Otros 26%']].map(([c, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.68rem', color: '#94A3B8' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
