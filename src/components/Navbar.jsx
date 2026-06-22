import { Link } from 'react-router-dom'

export default function Navbar({ onInscribirse }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', background: 'rgba(10,22,40,0.97)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
      <Link to="/" className="montserrat" style={{ fontWeight: 900, fontSize: '1.25rem', color: '#fff', letterSpacing: '-0.5px' }}>
        Dan<span style={{ color: '#1E88E5' }}>Excel</span>
      </Link>
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <Link to="/clases" style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Mis Clases</Link>
        <Link to="/certificado" style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Certificado</Link>
        <button onClick={onInscribirse} className="btn-wa"
          style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem', border: 'none', cursor: 'pointer' }}>
          <i className="ti ti-user-plus" aria-hidden="true" /> Inscribirme
        </button>
      </div>
    </nav>
  )
}
