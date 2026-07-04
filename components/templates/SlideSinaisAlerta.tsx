import { CSSProperties } from 'react'
import { SinaisAlertaData } from '../../data/posts'

interface Props { data: SinaisAlertaData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function SlideSinaisAlerta({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.pergaminho,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Faixa lateral esquerda — elemento editorial */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 4,
        background: `linear-gradient(to bottom, ${C.cipestre} 0%, ${C.cipestre} 60%, transparent 100%)`,
        opacity: 0.15,
      }} />

      {/* Topo */}
      <div style={{ padding: '88px 108px 0 124px' }}>
        <p style={{
          ...sans,
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: '0.28em',
          color: C.salvia,
          textTransform: 'uppercase',
          marginBottom: 36,
        }}>
          sinais de alerta
        </p>

        <h1 style={{
          ...serif,
          fontSize: 76,
          fontWeight: 500,
          lineHeight: 1.12,
          color: C.cipestre,
          letterSpacing: '-0.02em',
          marginBottom: 56,
        }}>
          {data.titulo}
        </h1>

        <div style={{ height: 0.5, background: C.cipestre, opacity: 0.15 }} />
      </div>

      {/* Lista */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 108px 0 124px',
      }}>
        {data.sinais.map((sinal, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 32,
            padding: '36px 0',
            borderBottom: i < data.sinais.length - 1
              ? `0.5px solid rgba(42,58,51,0.12)`
              : 'none',
          }}>
            {/* Índice */}
            <span style={{
              ...sans,
              fontSize: 13,
              color: C.terracota,
              opacity: 0.8,
              letterSpacing: '0.1em',
              flexShrink: 0,
              width: 24,
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            {/* Sinal */}
            <p style={{
              ...sans,
              fontSize: 30,
              fontWeight: 300,
              color: C.cipestre,
              lineHeight: 1.45,
            }}>
              {sinal}
            </p>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <div style={{ padding: '0 108px 80px 124px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{
          ...serif,
          fontSize: 22,
          fontStyle: 'italic',
          color: C.cipestre,
          opacity: 0.45,
        }}>
          Intervenção precoce evita complicações.
        </p>
        <p style={{
          ...sans,
          fontSize: 17,
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
