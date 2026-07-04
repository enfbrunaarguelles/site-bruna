import { CSSProperties } from 'react'
import { NarrativaData } from '../../data/posts'

interface Props { data: NarrativaData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties  = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function Narrativa({ data }: Props) {
  const isLight = data.variante === 'light'
  const bg = isLight ? C.pergaminho : C.branco
  const accent = isLight ? C.salvia : C.terracota

  return (
    <div style={{
      width: 1080, height: 1350,
      background: bg,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '100px 108px',
    }}>

      {/* Número decorativo de fundo — quase invisível */}
      <p style={{
        position: 'absolute',
        bottom: 40, right: 60,
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

      {/* Linha topo colorida — apenas na variante contrast */}
      {!isLight && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 2,
          background: accent,
          opacity: 0.4,
        }} />
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 64 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: accent, opacity: 0.7 }} />
          <p style={{
            ...sans,
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: '0.22em',
            color: accent,
            opacity: 0.85,
            textTransform: 'uppercase',
          }}>
            {data.label}
          </p>
        </div>

        {/* Texto principal */}
        <p style={{
          ...serif,
          fontSize: isLight ? 62 : 64,
          fontWeight: isLight ? 400 : 500,
          fontStyle: isLight ? 'italic' : 'normal',
          lineHeight: 1.28,
          color: C.cipestre,
          letterSpacing: '-0.015em',
          marginBottom: data.destaque ? 52 : 0,
        }}>
          {data.texto}
        </p>

        {/* Destaque — palavra-chave em evidência */}
        {data.destaque && (
          <>
            <div style={{ width: 36, height: 0.5, background: accent, opacity: 0.5, marginBottom: 28 }} />
            <p style={{
              ...sans,
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: '0.22em',
              color: accent,
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              {data.destaque}
            </p>
          </>
        )}
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
