import { CSSProperties } from 'react'
import { ErroComumData } from '../../data/posts'

interface Props { data: ErroComumData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function SlideErroComum({ data }: Props) {
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

      {/* Círculo de fundo, canto inferior direito */}
      <div style={{
        position: 'absolute',
        bottom: -200, right: -200,
        width: 640, height: 640,
        borderRadius: '50%',
        background: C.pergaminho,
        opacity: 0.6,
        pointerEvents: 'none',
      }} />

      {/* Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 64 }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.terracota }} />
        <p style={{
          ...sans,
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: '0.28em',
          color: C.terracota,
          textTransform: 'uppercase',
        }}>
          erro comum
        </p>
      </div>

      {/* Título grande */}
      <h1 style={{
        ...serif,
        fontSize: 100,
        fontWeight: 500,
        lineHeight: 1.05,
        color: C.cipestre,
        letterSpacing: '-0.025em',
        marginBottom: 72,
      }}>
        {data.titulo}
      </h1>

      {/* Linha de acento */}
      <div style={{ width: 48, height: 1, background: C.terracota, opacity: 0.6, marginBottom: 60 }} />

      {/* Descrição */}
      <p style={{
        ...sans,
        fontSize: 30,
        fontWeight: 300,
        lineHeight: 1.7,
        color: C.cipestre,
        opacity: 0.72,
        marginBottom: 72,
        maxWidth: 760,
      }}>
        {data.descricao}
      </p>

      {/* Nota — destaque sutil */}
      <p style={{
        ...serif,
        fontSize: 28,
        fontWeight: 400,
        fontStyle: 'italic',
        color: C.salvia,
        lineHeight: 1.5,
      }}>
        {data.nota}
      </p>

      {/* Handle */}
      <p style={{
        position: 'absolute',
        bottom: 80,
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
