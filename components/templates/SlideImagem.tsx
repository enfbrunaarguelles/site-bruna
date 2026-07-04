import { CSSProperties } from 'react'
import { SlideImagemData } from '../../data/posts'

interface Props { data: SlideImagemData }

const C = { cipestre: '#2A3A33', salvia: '#5A7A6B', terracota: '#C97862', pergaminho: '#F7F2E8', branco: '#FFFFFF' }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties  = { fontFamily: "'DM Sans', system-ui, sans-serif" }

// ── Layout Split: imagem esquerda, texto direita ───────────────────────────
function SplitLayout({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.branco,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Faixa superior em pergaminho */}
      <div style={{ height: 3, background: C.salvia, opacity: 0.25 }} />

      {/* Label — topo */}
      <div style={{ padding: '60px 80px 0', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.salvia, opacity: 0.7 }} />
        <p style={{
          ...sans,
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: '0.22em',
          color: C.salvia,
          textTransform: 'uppercase',
          opacity: 0.8,
        }}>
          {data.label}
        </p>
      </div>

      {/* Corpo — imagem esquerda + texto direita */}
      <div style={{
        flex: 1,
        display: 'flex',
        gap: 0,
        padding: '48px 0 80px',
      }}>
        {/* Imagem — lado esquerdo */}
        <div style={{
          width: 500,
          flexShrink: 0,
          margin: '0 0 0 72px',
          borderRadius: 8,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 4px 32px rgba(42,58,51,0.08)',
        }}>
          <img
            src={data.imageSrc}
            alt={data.imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          {/* Gradiente sutil na borda inferior */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 80,
            background: 'linear-gradient(to top, rgba(255,255,255,0.3), transparent)',
          }} />
        </div>

        {/* Texto — lado direito */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 72px 0 52px',
        }}>
          <h2 style={{
            ...serif,
            fontSize: 52,
            fontWeight: 500,
            lineHeight: 1.2,
            color: C.cipestre,
            letterSpacing: '-0.015em',
            marginBottom: 36,
          }}>
            {data.titulo}
          </h2>

          <div style={{ width: 32, height: 0.5, background: C.terracota, opacity: 0.5, marginBottom: 32 }} />

          <p style={{
            ...sans,
            fontSize: 28,
            fontWeight: 300,
            lineHeight: 1.65,
            color: C.cipestre,
            opacity: 0.7,
          }}>
            {data.descricao}
          </p>
        </div>
      </div>

      {/* Handle */}
      <p style={{
        position: 'absolute',
        bottom: 52,
        right: 80,
        ...sans,
        fontSize: 22,
        color: C.cipestre,
        opacity: 0.3,
        letterSpacing: '0.06em',
      }}>
        {data.handle}
      </p>
    </div>
  )
}

// ── Layout Produto: imagem centrada, texto abaixo ─────────────────────────
function ProdutoLayout({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.pergaminho,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Círculo decorativo de fundo */}
      <div style={{
        position: 'absolute',
        top: 80, left: '50%',
        transform: 'translateX(-50%)',
        width: 700, height: 700,
        borderRadius: '50%',
        background: C.branco,
        opacity: 0.55,
        pointerEvents: 'none',
      }} />

      {/* Label */}
      <div style={{ padding: '72px 100px 0', display: 'flex', alignItems: 'center', gap: 14, position: 'relative', zIndex: 1 }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.terracota, opacity: 0.7 }} />
        <p style={{
          ...sans,
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: '0.22em',
          color: C.terracota,
          textTransform: 'uppercase',
          opacity: 0.85,
        }}>
          {data.label}
        </p>
      </div>

      {/* Imagem centrada */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 140px',
        position: 'relative',
        zIndex: 1,
        flex: '0 0 auto',
      }}>
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          style={{
            width: 420,
            height: 420,
            objectFit: 'contain',
            display: 'block',
            filter: 'drop-shadow(0 8px 32px rgba(42,58,51,0.12))',
          }}
        />
      </div>

      {/* Texto abaixo */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 100px 80px',
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 style={{
          ...serif,
          fontSize: 58,
          fontWeight: 500,
          lineHeight: 1.18,
          color: C.cipestre,
          letterSpacing: '-0.015em',
          marginBottom: 32,
        }}>
          {data.titulo}
        </h2>

        <div style={{ width: 32, height: 0.5, background: C.salvia, opacity: 0.4, marginBottom: 28 }} />

        <p style={{
          ...sans,
          fontSize: 28,
          fontWeight: 300,
          lineHeight: 1.65,
          color: C.cipestre,
          opacity: 0.65,
        }}>
          {data.descricao}
        </p>
      </div>

      {/* Handle */}
      <p style={{
        position: 'absolute',
        bottom: 52,
        right: 100,
        ...sans,
        fontSize: 22,
        color: C.cipestre,
        opacity: 0.3,
        letterSpacing: '0.06em',
      }}>
        {data.handle}
      </p>
    </div>
  )
}

// ── Layout Capa Imagem: imagem direita + texto esquerda ───────────────────
function CapaImagemLayout({ data }: Props) {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: C.branco,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Fundo pergaminho lado direito */}
      <div style={{
        position: 'absolute', right: 0, top: 0,
        width: 560, height: 1350,
        background: C.pergaminho,
      }} />

      {/* Imagem lado direito com máscara */}
      <div style={{
        position: 'absolute',
        right: 0, top: 0,
        width: 560, height: 1350,
        WebkitMaskImage: [
          'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
          'linear-gradient(to bottom, transparent 0%, black 5%, black 90%, transparent 100%)',
        ].join(', '),
        WebkitMaskComposite: 'source-in',
        maskImage: [
          'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
          'linear-gradient(to bottom, transparent 0%, black 5%, black 90%, transparent 100%)',
        ].join(', '),
        maskComposite: 'intersect',
      }}>
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block',
            filter: 'contrast(1.04) brightness(1.0)',
          }}
        />
      </div>

      {/* Texto lado esquerdo */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 560,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 52px 0 88px',
      }}>
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

        <h1 style={{
          ...serif,
          fontSize: 68,
          fontWeight: 500,
          fontStyle: 'italic',
          lineHeight: 1.12,
          color: C.cipestre,
          letterSpacing: '-0.02em',
          marginBottom: 40,
        }}>
          {data.titulo}
        </h1>

        <div style={{ width: 32, height: 0.5, background: C.terracota, opacity: 0.6, marginBottom: 32 }} />

        <p style={{
          ...sans,
          fontSize: 22,
          fontWeight: 300,
          fontStyle: 'italic',
          color: C.cipestre,
          opacity: 0.5,
          letterSpacing: '0.02em',
        }}>
          {data.descricao}
        </p>
      </div>

      {/* Logo + handle */}
      <div style={{
        position: 'absolute',
        bottom: 60, left: 88,
      }}>
        <img src="/LOGOTIPO.png" alt="Bruna Arguelles"
          style={{ height: 80, width: 'auto', opacity: 0.75 }} />
      </div>
      <p style={{
        position: 'absolute', bottom: 68, right: 72,
        ...sans, fontSize: 20, color: C.cipestre, opacity: 0.32, letterSpacing: '0.06em',
      }}>
        {data.handle}
      </p>
    </div>
  )
}

export default function SlideImagem({ data }: Props) {
  if (data.layout === 'split') return <SplitLayout data={data} />
  if (data.layout === 'capa-imagem') return <CapaImagemLayout data={data} />
  return <ProdutoLayout data={data} />
}
