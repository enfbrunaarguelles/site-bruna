import { CSSProperties } from 'react'
import { EducativoData } from '../../data/posts'

interface Props { data: EducativoData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function SlideEducativo({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.branco,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Faixa de acento topo — muito fina */}
      <div style={{ height: 3, background: C.cipestre, width: '100%' }} />

      {/* Número decorativo de fundo — quase invisível */}
      <div style={{
        position: 'absolute',
        bottom: 60,
        right: 80,
        ...serif,
        fontSize: 400,
        fontWeight: 700,
        color: C.cipestre,
        opacity: 0.025,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        ✦
      </div>

      {/* Header */}
      <div style={{ padding: '80px 108px 0' }}>
        <p style={{
          ...sans,
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: '0.28em',
          color: C.terracota,
          textTransform: 'uppercase',
          marginBottom: 28,
        }}>
          {data.label}
        </p>
        <h1 style={{
          ...serif,
          fontSize: 86,
          fontWeight: 500,
          lineHeight: 1.1,
          color: C.cipestre,
          letterSpacing: '-0.02em',
        }}>
          {data.titulo}
        </h1>
      </div>

      {/* Divisor */}
      <div style={{ margin: '56px 108px 0', height: 0.5, background: C.cipestre, opacity: 0.1 }} />

      {/* Bullets — espaçados, arejados */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 108px',
      }}>
        {data.bullets.map((b, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 48,
            alignItems: 'flex-start',
            padding: '48px 0',
            borderBottom: i < data.bullets.length - 1
              ? `0.5px solid rgba(42,58,51,0.1)`
              : 'none',
          }}>
            {/* Número */}
            <span style={{
              ...sans,
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: C.salvia,
              opacity: 0.7,
              paddingTop: 8,
              flexShrink: 0,
              width: 28,
            }}>
              {b.numero}
            </span>
            {/* Texto */}
            <p style={{
              ...serif,
              fontSize: 36,
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: C.cipestre,
            }}>
              {b.texto}
            </p>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <div style={{ padding: '0 108px 72px', display: 'flex', justifyContent: 'flex-end' }}>
        <p style={{
          ...sans,
          fontSize: 18,
          color: C.cipestre,
          opacity: 0.3,
          letterSpacing: '0.06em',
        }}>
          {data.handle}
        </p>
      </div>
    </div>
  )
}
