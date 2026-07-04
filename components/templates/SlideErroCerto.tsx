import { CSSProperties } from 'react'
import { ErroCertoData } from '../../data/posts'

interface Props { data: ErroCertoData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties  = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function SlideErroCerto({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.branco,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Bloco superior — erro */}
      <div style={{
        flex: '0 0 600px',
        background: C.pergaminho,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 108px 64px',
        position: 'relative',
      }}>
        {/* Decoração: círculo grande topo-direito */}
        <div style={{
          position: 'absolute',
          top: -180, right: -180,
          width: 520, height: 520,
          borderRadius: '50%',
          background: 'rgba(201,120,98,0.08)',
          pointerEvents: 'none',
        }} />

        {/* Label "ERRO 01" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.terracota }} />
          <p style={{
            ...sans,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: '0.22em',
            color: C.terracota,
            textTransform: 'uppercase',
          }}>
            erro {data.numero}
          </p>
        </div>

        {/* Texto do erro */}
        <h1 style={{
          ...serif,
          fontSize: 78,
          fontWeight: 500,
          fontStyle: 'italic',
          lineHeight: 1.1,
          color: C.cipestre,
          letterSpacing: '-0.02em',
        }}>
          {data.erro}
        </h1>
      </div>

      {/* Linha divisória */}
      <div style={{ height: 2, background: C.terracota, opacity: 0.25 }} />

      {/* Bloco inferior — o certo */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 108px',
        position: 'relative',
      }}>
        {/* Label "O CERTO" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{ width: 32, height: 1, background: C.salvia }} />
          <p style={{
            ...sans,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: '0.22em',
            color: C.salvia,
            textTransform: 'uppercase',
          }}>
            o certo
          </p>
        </div>

        {/* Texto correto */}
        <p style={{
          ...sans,
          fontSize: 32,
          fontWeight: 300,
          lineHeight: 1.7,
          color: C.cipestre,
          opacity: 0.85,
        }}>
          {data.certo}
        </p>
      </div>

      {/* Handle */}
      <p style={{
        position: 'absolute',
        bottom: 48,
        right: 108,
        ...sans,
        fontSize: 18,
        color: C.cipestre,
        opacity: 0.28,
        letterSpacing: '0.06em',
      }}>
        {data.handle}
      </p>
    </div>
  )
}
