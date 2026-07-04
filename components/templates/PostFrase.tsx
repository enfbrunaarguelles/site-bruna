import { CSSProperties } from 'react'
import { FraseData } from '../../data/posts'

interface Props { data: FraseData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function PostFrase({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.branco,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 108px',
    }}>
      {/* Borda interna elegante — quadro editorial */}
      <div style={{
        position: 'absolute',
        inset: 40,
        border: `0.5px solid rgba(42,58,51,0.1)`,
        borderRadius: 2,
        pointerEvents: 'none',
      }} />

      {/* Círculo decorativo de fundo */}
      <div style={{
        position: 'absolute',
        bottom: -120, right: -120,
        width: 500, height: 500,
        borderRadius: '50%',
        background: C.pergaminho,
        opacity: 0.55,
        pointerEvents: 'none',
      }} />

      {/* Conteúdo */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Aspas — tipográficas, refinadas */}
        <p style={{
          ...serif,
          fontSize: 120,
          lineHeight: 0.6,
          color: C.terracota,
          opacity: 0.25,
          marginBottom: 48,
          letterSpacing: '-0.05em',
        }}>
          "
        </p>

        {/* Frase — domina o espaço */}
        <p style={{
          ...serif,
          fontSize: 72,
          fontWeight: 400,
          fontStyle: 'italic',
          lineHeight: 1.25,
          color: C.cipestre,
          letterSpacing: '-0.015em',
          marginBottom: 80,
        }}>
          {data.frase}
        </p>

        {/* Separador */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginBottom: 36,
        }}>
          <div style={{ width: 40, height: 0.5, background: C.terracota, opacity: 0.5 }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.terracota, opacity: 0.4 }} />
        </div>

        {/* Autoria */}
        <p style={{
          ...sans,
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: '0.22em',
          color: C.salvia,
          opacity: 0.75,
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          {data.autoria}
        </p>
        <p style={{
          ...sans,
          fontSize: 16,
          fontWeight: 300,
          color: C.cipestre,
          opacity: 0.28,
          letterSpacing: '0.06em',
        }}>
          {data.handle}
        </p>
      </div>
    </div>
  )
}
