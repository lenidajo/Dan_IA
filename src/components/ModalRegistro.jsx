import { useState } from 'react'
import emailjs from '@emailjs/browser'

// ─── CONFIGURA ESTOS 3 VALORES EN EMAILJS ──────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_lfqk4tu'
const EMAILJS_TEMPLATE_ESTUDIANTE = 'template_fzo2exp'
const EMAILJS_TEMPLATE_DAN        = 'template_fzo2exp' // cambia cuando crees el 2do template
const EMAILJS_PUBLIC_KEY  = 'C20qgh-6IYtYgreqR'
// ───────────────────────────────────────────────────────────────────────────

const WA_GROUP = 'https://chat.whatsapp.com/KDQYQIgjgO6LO1T74FYxRH'
const DAN_EMAIL = 'ingproyect777@gmail.com'

export default function ModalRegistro({ onClose }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [estado, setEstado] = useState('idle') // idle | loading | success | error

  const handleSubmit = async () => {
    if (!nombre.trim() || !correo.trim()) return
    setEstado('loading')

    try {
      // 1. Email al estudiante con link del grupo
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ESTUDIANTE, {
        to_name:    nombre,
        to_email:   correo,
        grupo_link: WA_GROUP,
      }, EMAILJS_PUBLIC_KEY)

      // 2. Notificación a Dan
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_DAN, {
        estudiante_nombre: nombre,
        estudiante_correo: correo,
        to_email:          DAN_EMAIL,
      }, EMAILJS_PUBLIC_KEY)

      setEstado('success')
    } catch (err) {
      console.error(err)
      setEstado('error')
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem'
    }} onClick={onClose}>
      <div style={{
        background: '#0D1B2E', border: '1px solid rgba(30,136,229,0.35)',
        borderRadius: 16, padding: '2.5rem', maxWidth: 440, width: '100%',
        boxShadow: '0 25px 60px rgba(0,0,0,0.6)', position: 'relative'
      }} onClick={e => e.stopPropagation()}>

        {/* Cerrar */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'transparent', border: 'none', color: '#64748B',
          cursor: 'pointer', fontSize: '1.2rem', lineHeight: 1
        }}>✕</button>

        {estado === 'success' ? (
          /* ── Éxito ── */
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <div className="montserrat" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              ¡Registro exitoso!
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Te enviamos un correo a <strong style={{ color: '#1E88E5' }}>{correo}</strong> con el link para unirte al grupo de WhatsApp.
            </p>
            <p style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
              Revisa tu carpeta de spam si no lo ves en unos minutos.
            </p>
            <a href={WA_GROUP} target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#25D366', color: '#fff', padding: '0.8rem 1.8rem',
                borderRadius: 8, fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none'
              }}>
              <i className="ti ti-brand-whatsapp" /> Unirme al grupo ahora
            </a>
          </div>
        ) : (
          /* ── Formulario ── */
          <>
            <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
              <div style={{ fontSize: '0.7rem', color: '#1E88E5', letterSpacing: 1.5, fontWeight: 500, marginBottom: '0.5rem' }}>
                ACCESO AL CURSO
              </div>
              <div className="montserrat" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                Reserva tu cupo
              </div>
              <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Déjanos tus datos y te enviamos el acceso al grupo del curso por correo.
              </p>
            </div>

            {/* Nombre */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.78rem', color: '#94A3B8', display: 'block', marginBottom: '0.4rem' }}>
                Nombre completo
              </label>
              <input
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                placeholder="Tu nombre"
                style={{
                  width: '100%', background: '#0A1628',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '0.75rem 1rem',
                  color: '#fff', fontSize: '0.9rem', fontFamily: 'Inter',
                  outline: 'none', boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Correo */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.78rem', color: '#94A3B8', display: 'block', marginBottom: '0.4rem' }}>
                Correo electrónico
              </label>
              <input
                value={correo}
                onChange={e => setCorreo(e.target.value)}
                placeholder="tucorreo@gmail.com"
                type="email"
                style={{
                  width: '100%', background: '#0A1628',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '0.75rem 1rem',
                  color: '#fff', fontSize: '0.9rem', fontFamily: 'Inter',
                  outline: 'none', boxSizing: 'border-box'
                }}
              />
            </div>

            {estado === 'error' && (
              <div style={{ color: '#EF4444', fontSize: '0.8rem', marginBottom: '1rem', textAlign: 'center' }}>
                Ocurrió un error. Intenta de nuevo o escríbenos por WhatsApp.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={estado === 'loading' || !nombre.trim() || !correo.trim()}
              style={{
                width: '100%', background: estado === 'loading' ? '#334155' : '#1565C0',
                color: '#fff', border: 'none', borderRadius: 8,
                padding: '0.9rem', fontSize: '1rem', fontWeight: 500,
                cursor: estado === 'loading' ? 'not-allowed' : 'pointer',
                fontFamily: 'Inter', transition: 'background 0.2s'
              }}>
              {estado === 'loading' ? 'Enviando...' : 'Reservar mi cupo →'}
            </button>

            <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.72rem', marginTop: '1rem' }}>
              🔒 Tu información es privada. No hacemos spam.
            </p>
          </>
        )}
      </div>
    </div>
  )
}