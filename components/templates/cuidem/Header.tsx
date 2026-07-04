import { cdSans } from './brand'

const HEADER_BG = '#3D6132'

export default function Header() {
  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0,
      height: 90,
      background: HEADER_BG,
      display: 'flex',
      alignItems: 'center',
      padding: '0 56px',
      gap: 20,
    }}>
      <img
        src="/cuidem/logo.png"
        alt="CuiDem-APS"
        style={{ height: 56, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.92 }}
      />
      <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.3)' }} />
      <div>
        <p style={{
          ...cdSans,
          fontSize: 17,
          fontWeight: 600,
          color: '#FFFFFF',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          opacity: 0.9,
          lineHeight: 1.3,
        }}>
          CuiDem-APS
        </p>
        <p style={{
          ...cdSans,
          fontSize: 14,
          fontWeight: 400,
          color: '#FFFFFF',
          opacity: 0.65,
          letterSpacing: '0.04em',
        }}>
          Cuidados de Transição
        </p>
      </div>
    </div>
  )
}
