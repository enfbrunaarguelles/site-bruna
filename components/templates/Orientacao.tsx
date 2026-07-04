import { CSSProperties } from 'react'
import { OrientacaoData } from '../../data/posts'

interface Props { data: OrientacaoData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties  = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function Orientacao({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.pergaminho,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '100px 108px',
    }}>

      {/* Círculos decorativos — sutis */}
      <div style={{
        position: 'absolute',
        bottom: -140, right: -140,
        width: 480, height: 480,
        borderRadius: '50%',
        border: `0.5px solid ${C.cipestre}`,
        opacity: 0.07,
      }} />
      <div style={{
        position: 'absolute',
        bottom: -70, right: -70,
        width: 300, height: 300,
        borderRadius: '50%',
        border: `0.5px solid ${C.cipestre}`,
        opacity: 0.05,
      }} />

      {/* Número decorativo */}
      <p style={{
        position: 'absolute',
        top: 50, right: 60,
        ...serif,
        fontSize: 260,
        fontWeight: 700,
        color: C.cipestre,
        opacity: 0.03,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        {data.numero}
      </p>

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 64 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.salvia, opacity: 0.7 }} />
          <p style={{
            ...sans,
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: '0.22em',
            color: C.salvia,
            opacity: 0.8,
            textTransform: 'uppercase',
          }}>
            {data.label}
          </p>
        </div>

        {/* Texto "o que não é" — suave, secundário */}
        <p style={{
          ...sans,
          fontSize: 26,
          fontWeight: 300,
          color: C.cipestre,
          opacity: 0.5,
          lineHeight: 1.7,
          marginBottom: 56,
          fontStyle: 'italic',
        }}>
          {data.texto}
        </p>

        {/* Separador */}
        <div style={{ width: 36, height: 0.5, background: C.salvia, opacity: 0.4, marginBottom: 44 }} />

        {/* Destaque — mensagem principal, impactante */}
        <p style={{
          ...serif,
          fontSize: 58,
          fontWeight: 500,
          lineHeight: 1.22,
          color: C.cipestre,
          letterSpacing: '-0.015em',
        }}>
          {data.destaque}
        </p>
      </div>

      {/* Handle */}
      <p style={{
        position: 'absolute',
        bottom: 64,
        right: 108,
        ...sans,
        fontSize: 22,
        color: C.cipestre,
        opacity: 0.35,
        letterSpacing: '0.06em',
      }}>
        {data.handle}
      </p>
    </div>
  )
}
