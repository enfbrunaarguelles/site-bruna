import { DvCapaData } from '../../../data/drvictor-posts'
import { DV, dvDisplay, dvAccent, dvBody } from './brand'

interface Props { data: DvCapaData }

export default function ReelsCapa({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      position: 'relative',
      overflow: 'hidden',
      background: DV.profundo,
    }}>
      {/* Foto de fundo */}
      <img
        src={data.fotoSrc}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 22%',
        }}
      />

      {/* Overlay duotone — funde a foto com a paleta da marca */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(to bottom, rgba(1,16,57,0.5) 0%, rgba(1,16,57,0.3) 38%, rgba(1,16,57,0.9) 78%, ${DV.profundo} 100%)`,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: DV.profundo,
        opacity: 0.16,
        mixBlendMode: 'multiply',
      }} />

      {/* Logo topo */}
      <div style={{ position: 'absolute', top: 56, left: 64 }}>
        <img
          src="/Dr%20V%C3%ADctor/Logo%20horizontal%20branca.png"
          alt="Dr. Victor Costa"
          style={{ height: 38, width: 'auto', opacity: 0.95 }}
        />
      </div>

      {/* Conteúdo inferior */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        padding: '0 64px 76px',
      }}>
        {/* Label */}
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

        {/* Título grande */}
        <h1 style={{
          ...dvDisplay,
          fontSize: 58,
          fontWeight: 600,
          lineHeight: 1.2,
          color: DV.neve,
          letterSpacing: '-0.01em',
          marginBottom: 36,
        }}>
          {data.titulo}
        </h1>

        {/* Handle */}
        <p style={{
          ...dvBody,
          fontSize: 22,
          fontWeight: 500,
          color: DV.neve,
          opacity: 0.7,
          letterSpacing: '0.02em',
        }}>
          {data.handle}
        </p>
      </div>
    </div>
  )
}
