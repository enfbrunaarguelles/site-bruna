import { CSSProperties } from 'react'
import { EncerramentoData } from '../../data/posts'

interface Props { data: EncerramentoData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties  = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function Encerramento({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.branco,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Faixa topo — sálvia suave */}
      <div style={{ height: 2, background: C.salvia, opacity: 0.3 }} />

      {/* Fundo: bloco pergaminho na metade inferior */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 480,
        background: C.pergaminho,
      }} />

      {/* Conteúdo */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 108px',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Título forte */}
        <h1 style={{
          ...serif,
          fontSize: 82,
          fontWeight: 500,
          fontStyle: 'italic',
          lineHeight: 1.15,
          color: C.cipestre,
          letterSpacing: '-0.02em',
          marginBottom: 40,
        }}>
          {data.titulo}
        </h1>

        {/* Linha de acento */}
        <div style={{ width: 36, height: 0.5, background: C.terracota, opacity: 0.6, marginBottom: 36 }} />

        {/* Subtítulo */}
        <p style={{
          ...sans,
          fontSize: 26,
          fontWeight: 300,
          color: C.cipestre,
          opacity: 0.6,
          lineHeight: 1.7,
          marginBottom: 72,
        }}>
          {data.subtitulo}
        </p>

        {/* Assinatura — linha + nome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 32, height: 1, background: C.terracota, opacity: 0.5 }} />
          <p style={{
            ...sans,
            fontSize: 26,
            fontWeight: 400,
            color: C.cipestre,
            opacity: 0.55,
            letterSpacing: '0.04em',
          }}>
            {data.cta}
          </p>
        </div>
      </div>

      {/* Logo + handle — rodapé */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '0 108px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <img
          src="/@cuidarpelabruna/LOGOTIPO.png"
          alt="Bruna Arguelles"
          style={{ height: 110, width: 'auto', opacity: 0.85 }}
        />
        <p style={{
          ...sans,
          fontSize: 22,
          color: C.cipestre,
          opacity: 0.4,
          letterSpacing: '0.06em',
        }}>
          {data.handle}
        </p>
      </div>
    </div>
  )
}
