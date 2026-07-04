import { DvFraseData } from '../../../data/drvictor-posts'
import { DV, dvDisplay, dvAccent, dvBody } from './brand'

interface Props { data: DvFraseData }

export default function ReelsFrase({ data }: Props) {
  const bg = data.fundo === 'profundo' ? DV.profundo : DV.sombra

  return (
    <div style={{
      width: 1080, height: 1350,
      position: 'relative',
      overflow: 'hidden',
      background: bg,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 80px',
    }}>
      {/* Padrão de marca — textura sutil de fundo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/Dr%20V%C3%ADctor/Pattern.png)',
        backgroundSize: '380px',
        opacity: 0.45,
        pointerEvents: 'none',
      }} />

      {/* Número decorativo gigante */}
      <p style={{
        position: 'absolute',
        top: 56, right: 48,
        ...dvDisplay,
        fontSize: 250,
        fontWeight: 700,
        color: DV.neve,
        opacity: 0.05,
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {data.numero}
      </p>

      {/* Conteúdo */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ width: 44, height: 2, background: DV.areia, marginBottom: 44, opacity: 0.85 }} />

        <p style={{
          ...dvDisplay,
          fontSize: 50,
          fontWeight: 500,
          lineHeight: 1.3,
          color: DV.neve,
          letterSpacing: '-0.01em',
        }}>
          {data.texto}
        </p>

        {data.destaque && (
          <div style={{ marginTop: 40 }}>
            <p style={{
              ...dvAccent,
              fontSize: 24,
              color: DV.areia,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {data.destaque}
            </p>
          </div>
        )}
      </div>

      {/* Handle */}
      <p style={{
        position: 'absolute',
        bottom: 60, left: 80,
        ...dvBody,
        fontSize: 21,
        fontWeight: 500,
        color: DV.neve,
        opacity: 0.45,
        letterSpacing: '0.02em',
      }}>
        {data.handle}
      </p>
    </div>
  )
}
