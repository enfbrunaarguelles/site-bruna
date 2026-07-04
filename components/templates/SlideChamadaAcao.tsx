import { CSSProperties } from 'react'
import { CtaData } from '../../data/posts'

interface Props { data: CtaData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function SlideChamadaAcao({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.cipestre,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Círculo decorativo grande — quase invisível */}
      <div style={{
        position: 'absolute',
        top: -300, right: -300,
        width: 900, height: 900,
        borderRadius: '50%',
        border: `1px solid rgba(90,122,107,0.2)`,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -200, left: -200,
        width: 700, height: 700,
        borderRadius: '50%',
        border: `1px solid rgba(90,122,107,0.12)`,
        pointerEvents: 'none',
      }} />

      {/* Topo */}
      <div style={{ padding: '88px 108px 0' }}>
        <p style={{
          ...sans,
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: '0.28em',
          color: C.salvia,
          opacity: 0.7,
          textTransform: 'uppercase',
        }}>
          {data.label}
        </p>
      </div>

      {/* Conteúdo central */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 108px',
      }}>
        <h1 style={{
          ...serif,
          fontSize: 86,
          fontWeight: 400,
          fontStyle: 'italic',
          lineHeight: 1.15,
          color: C.pergaminho,
          letterSpacing: '-0.015em',
          marginBottom: 72,
        }}>
          {data.chamada}
        </h1>

        {/* Linha de separação */}
        <div style={{ width: 48, height: 0.5, background: C.terracota, opacity: 0.8, marginBottom: 64 }} />

        {/* Botão — refinado, não exagerado */}
        <div style={{
          display: 'inline-flex',
          alignSelf: 'flex-start',
          alignItems: 'center',
          gap: 20,
          border: `1px solid rgba(247,242,232,0.25)`,
          padding: '24px 44px',
          borderRadius: 2,
          marginBottom: 40,
        }}>
          <span style={{
            ...sans,
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: C.pergaminho,
          }}>
            {data.acao}
          </span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M10 4l5 5-5 5" stroke={C.pergaminho} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
          </svg>
        </div>

        <p style={{
          ...sans,
          fontSize: 22,
          fontWeight: 300,
          color: C.pergaminho,
          opacity: 0.45,
          fontStyle: 'italic',
          letterSpacing: '0.02em',
        }}>
          {data.sub}
        </p>
      </div>

      {/* Rodapé */}
      <div style={{ padding: '0 108px 80px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ height: 0.5, flex: 1, background: 'rgba(247,242,232,0.12)' }} />
        <p style={{
          ...sans,
          fontSize: 18,
          color: C.pergaminho,
          opacity: 0.25,
          letterSpacing: '0.06em',
        }}>
          {data.handle}
        </p>
      </div>
    </div>
  )
}
