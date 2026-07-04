import { CSSProperties } from 'react'
import { RiscosData } from '../../data/posts'

interface Props { data: RiscosData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties  = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function Riscos({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.branco,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '100px 108px',
    }}>

      {/* Número watermark — canto superior direito, igual aos outros slides */}
      <p style={{
        position: 'absolute',
        top: 40, right: 60,
        ...serif,
        fontSize: 280,
        fontWeight: 700,
        color: C.cipestre,
        opacity: 0.04,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        {data.numero}
      </p>

      {/* Conteúdo centrado */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 44 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.terracota, opacity: 0.8 }} />
          <p style={{
            ...sans,
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: '0.22em',
            color: C.terracota,
            textTransform: 'uppercase',
          }}>
            {data.label}
          </p>
        </div>

        {/* Intro — serifado em itálico, como subtítulo */}
        <p style={{
          ...serif,
          fontSize: 36,
          fontWeight: 400,
          fontStyle: 'italic',
          color: C.cipestre,
          opacity: 0.5,
          lineHeight: 1.4,
          marginBottom: 52,
        }}>
          {data.intro}
        </p>

        {/* Linha separadora */}
        <div style={{ width: 36, height: 0.5, background: C.cipestre, opacity: 0.2, marginBottom: 52 }} />

        {/* Itens — serifados, grandes, sem numeração, sem bordas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {data.itens.map((item, i) => (
            <p key={i} style={{
              ...serif,
              fontSize: 46,
              fontWeight: 400,
              lineHeight: 1.2,
              color: C.cipestre,
              display: 'flex',
              alignItems: 'baseline',
              gap: 20,
            }}>
              <span style={{
                ...sans,
                fontSize: 20,
                color: C.terracota,
                opacity: 0.6,
                letterSpacing: '0.08em',
                flexShrink: 0,
                paddingTop: 4,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Handle */}
      <p style={{
        position: 'absolute',
        bottom: 64,
        right: 108,
        ...sans,
        fontSize: 22,
        color: C.cipestre,
        opacity: 0.38,
        letterSpacing: '0.06em',
      }}>
        {data.handle}
      </p>
    </div>
  )
}
