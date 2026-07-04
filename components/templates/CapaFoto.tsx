import { CSSProperties } from 'react'
import { CapaFotoData } from '../../data/posts'

interface Props { data: CapaFotoData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties  = { fontFamily: "'DM Sans', system-ui, sans-serif" }

export default function CapaFoto({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.branco,
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Foto discreta — fade forte nas bordas, opacidade reduzida */}
      <div style={{
        position: 'absolute',
        right: 0, top: 0,
        width: 480, height: 1350,
        WebkitMaskImage: [
          'linear-gradient(to right, transparent 0%, black 38%, black 75%, transparent 100%)',
          'linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)',
        ].join(', '),
        WebkitMaskComposite: 'source-in',
        maskImage: [
          'linear-gradient(to right, transparent 0%, black 38%, black 75%, transparent 100%)',
          'linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)',
        ].join(', '),
        maskComposite: 'intersect',
        opacity: 0.55,
      }}>
        <img
          src={data.fotoSrc}
          alt="Bruna Arguelles"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '45% 5%',
            display: 'block',
            imageRendering: 'high-quality' as CSSProperties['imageRendering'],
            filter: 'contrast(1.02) brightness(1.03) saturate(0.9)',
          }}
        />
      </div>

      {/* Texto — lado esquerdo, sem invadir a área da foto */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 560,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 56px 0 88px',
      }}>

        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 52 }}>
          <div style={{ width: 24, height: 0.5, background: C.terracota }} />
          <p style={{
            ...sans,
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: '0.22em',
            color: C.salvia,
            textTransform: 'uppercase',
          }}>
            {data.label}
          </p>
        </div>

        {/* Título */}
        <h1 style={{
          ...serif,
          fontSize: 72,
          fontWeight: 500,
          fontStyle: 'italic',
          lineHeight: 1.12,
          color: C.cipestre,
          letterSpacing: '-0.02em',
          marginBottom: 40,
        }}>
          {data.titulo}
        </h1>

        {/* Linha de acento */}
        <div style={{ width: 36, height: 0.5, background: C.terracota, opacity: 0.7, marginBottom: 32 }} />

        {/* Subtítulo */}
        <p style={{
          ...sans,
          fontSize: 32,
          fontWeight: 300,
          lineHeight: 1.65,
          color: C.cipestre,
          opacity: 0.6,
          letterSpacing: '0.01em',
        }}>
          {data.subtitulo}
        </p>
      </div>

      {/* Logo — canto inferior esquerdo */}
      <div style={{
        position: 'absolute',
        bottom: 64,
        left: 88,
      }}>
        <img
          src="/@cuidarpelabruna/LOGOTIPO.png"
          alt="Bruna Arguelles Enfermeira"
          style={{ height: 80, width: 'auto', opacity: 0.8 }}
        />
      </div>

      {/* Handle — canto inferior direito */}
      <p style={{
        position: 'absolute',
        bottom: 72,
        right: 72,
        ...sans,
        fontSize: 16,
        color: C.cipestre,
        opacity: 0.35,
        letterSpacing: '0.06em',
      }}>
        {data.handle}
      </p>

      {/* Indicador deslize */}
      <div style={{
        position: 'absolute',
        bottom: 72,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <p style={{
          ...sans,
          fontSize: 13,
          color: C.cipestre,
          opacity: 0.3,
          letterSpacing: '0.12em',
          fontStyle: 'italic',
        }}>
          deslize
        </p>
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" opacity={0.3}>
          <path d="M0 4h14M10 1l4 3-4 3" stroke={C.cipestre} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
