import { CSSProperties } from 'react'
import { CapaData } from '../../data/posts'

interface Props { data: CapaData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function CapaCarrossel({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.pergaminho,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Círculo decorativo de fundo — grande, quase invisível */}
      <div style={{
        position: 'absolute',
        top: -280, right: -280,
        width: 800, height: 800,
        borderRadius: '50%',
        border: `1px solid ${C.salvia}`,
        opacity: 0.12,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: -180, right: -180,
        width: 600, height: 600,
        borderRadius: '50%',
        border: `1px solid ${C.salvia}`,
        opacity: 0.08,
        pointerEvents: 'none',
      }} />

      {/* Topo — label em small caps */}
      <div style={{ padding: '88px 108px 0', display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 28, height: 0.5, background: C.terracota }} />
        <p style={{
          ...sans,
          fontSize: 22,
          fontWeight: 400,
          letterSpacing: '0.22em',
          color: C.salvia,
          textTransform: 'uppercase',
        }}>
          {data.label}
        </p>
      </div>

      {/* Título — ocupa o espaço central com generosidade */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: '60px 108px',
      }}>
        <h1 style={{
          ...serif,
          fontSize: 96,
          fontWeight: 500,
          lineHeight: 1.1,
          color: C.cipestre,
          letterSpacing: '-0.02em',
        }}>
          {data.titulo}
        </h1>
      </div>

      {/* Rodapé */}
      <div style={{ padding: '0 108px 88px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        {/* Linha fina */}
        <div style={{ height: 0.5, background: C.cipestre, opacity: 0.15 }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{
            ...sans,
            fontSize: 26,
            fontWeight: 300,
            fontStyle: 'italic',
            color: C.cipestre,
            opacity: 0.55,
            letterSpacing: '0.02em',
          }}>
            {data.detalhe}
          </p>
          <p style={{
            ...sans,
            fontSize: 22,
            fontWeight: 400,
            color: C.cipestre,
            opacity: 0.45,
            letterSpacing: '0.06em',
          }}>
            {data.handle}
          </p>
        </div>
      </div>

      {/* Ponto de acento — único elemento colorido discreto */}
      <div style={{
        position: 'absolute',
        bottom: 88,
        left: 108,
        width: 6, height: 6,
        borderRadius: '50%',
        background: C.terracota,
        opacity: 0.7,
      }} />
    </div>
  )
}
