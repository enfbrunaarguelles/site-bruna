import { DvCtaData } from '../../../data/drvictor-posts'
import { DV, dvDisplay, dvAccent, dvBody } from './brand'

interface Props { data: DvCtaData }

export default function ReelsCta({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      position: 'relative',
      overflow: 'hidden',
      background: DV.profundo,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 80px',
      textAlign: 'center',
    }}>
      {/* Padrão de marca sutil */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/Dr%20V%C3%ADctor/Pattern.png)',
        backgroundSize: '380px',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      <img
        src="/Dr%20V%C3%ADctor/Logo%20vertical%20branca.png"
        alt="Dr. Victor Costa"
        style={{ height: 150, width: 'auto', marginBottom: 64, position: 'relative', zIndex: 1, opacity: 0.95 }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          ...dvDisplay,
          fontSize: 46,
          fontWeight: 600,
          lineHeight: 1.3,
          color: DV.neve,
          marginBottom: 28,
        }}>
          {data.titulo}
        </h1>

        <p style={{
          ...dvBody,
          fontSize: 24,
          fontWeight: 300,
          color: DV.neve,
          opacity: 0.65,
          lineHeight: 1.5,
          marginBottom: 52,
        }}>
          {data.subtitulo}
        </p>

        {/* Botão CTA */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 16,
          border: `1px solid ${DV.areia}`,
          padding: '22px 44px',
          borderRadius: 2,
          marginBottom: 48,
        }}>
          <span style={{
            ...dvAccent,
            fontSize: 23,
            color: DV.areia,
            letterSpacing: '0.05em',
          }}>
            {data.cta}
          </span>
        </div>

        <p style={{
          ...dvBody,
          fontSize: 23,
          fontWeight: 500,
          color: DV.neve,
          opacity: 0.7,
        }}>
          {data.handle}
        </p>
      </div>
    </div>
  )
}
