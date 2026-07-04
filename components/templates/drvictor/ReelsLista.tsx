import { DvListaData } from '../../../data/drvictor-posts'
import { DV, dvDisplay, dvAccent, dvBody } from './brand'

interface Props { data: DvListaData }

export default function ReelsLista({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      position: 'relative',
      overflow: 'hidden',
      background: DV.profundo,
      display: 'flex',
      flexDirection: 'column',
      padding: '88px 80px 64px',
    }}>
      {/* Padrão de marca sutil */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/Dr%20V%C3%ADctor/Pattern.png)',
        backgroundSize: '380px',
        opacity: 0.45,
        pointerEvents: 'none',
      }} />

      {/* Número decorativo */}
      <p style={{
        position: 'absolute',
        top: 44, right: 48,
        ...dvDisplay,
        fontSize: 220,
        fontWeight: 700,
        color: DV.neve,
        opacity: 0.05,
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {data.numero}
      </p>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
          <div style={{ width: 28, height: 1, background: DV.areia }} />
          <p style={{
            ...dvAccent,
            fontSize: 19,
            letterSpacing: '0.2em',
            color: DV.areia,
            textTransform: 'uppercase',
          }}>
            {data.label}
          </p>
        </div>
        <h2 style={{
          ...dvDisplay,
          fontSize: 38,
          fontWeight: 500,
          lineHeight: 1.25,
          color: DV.neve,
        }}>
          {data.intro}
        </h2>
      </div>

      {/* Linha separadora */}
      <div style={{ position: 'relative', zIndex: 1, height: 1, background: 'rgba(254,252,247,0.15)', marginTop: 40 }} />

      {/* Lista — ritmo fixo, sem espaçamento elástico */}
      <div style={{
        position: 'relative', zIndex: 1,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {data.itens.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
            padding: '30px 0',
            borderBottom: i < data.itens.length - 1 ? '1px solid rgba(254,252,247,0.12)' : 'none',
          }}>
            <div style={{
              width: 12, height: 12,
              borderRadius: '50%',
              border: `2px solid ${DV.oceanico}`,
              flexShrink: 0,
            }} />
            <p style={{
              ...dvBody,
              fontSize: 32,
              fontWeight: 400,
              color: DV.neve,
              lineHeight: 1.3,
            }}>
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Handle */}
      <p style={{
        position: 'relative', zIndex: 1,
        ...dvBody,
        fontSize: 21,
        fontWeight: 500,
        color: DV.neve,
        opacity: 0.45,
        letterSpacing: '0.02em',
        textAlign: 'right',
      }}>
        {data.handle}
      </p>
    </div>
  )
}
