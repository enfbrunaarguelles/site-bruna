import { CSSProperties } from 'react'
import { posts } from './data/posts'
import { drVictorPosts } from './data/drvictor-posts'
import { cuidemPosts } from './data/cuidem-posts'
import PostFrame from './components/PostFrame'
import AnyPostRenderer from './components/AnyPostRenderer'
import PrecificacaoPage from './components/PrecificacaoPage'

const sans: CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" }
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }

const allPosts = [...posts, ...drVictorPosts, ...cuidemPosts]

function ExportView() {
  const params = new URLSearchParams(window.location.search)
  const postId = params.get('post')
  const post = allPosts.find((p) => p.id === postId)

  if (!post) {
    return (
      <div style={{ ...sans, padding: 40, color: '#2A3A33' }}>
        Post não encontrado: <code>{postId}</code>
      </div>
    )
  }

  const width = post.width ?? 1080
  const height = post.height ?? 1350

  return (
    <div
      style={{
        width,
        height,
        overflow: 'hidden',
      }}
      id="post-export"
    >
      <AnyPostRenderer data={post.data} />
    </div>
  )
}

function PreviewGrid() {
  const SCALE = 0.28

  return (
    <div style={{ minHeight: '100vh', padding: '60px 48px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: 64, borderBottom: '1px solid #D4CDB8', paddingBottom: 40 }}>
        <p
          style={{
            ...sans,
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: '0.2em',
            color: '#5A7A6B',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Sistema de Posts · Instagram
        </p>
        <h1
          style={{
            ...serif,
            fontSize: 40,
            fontWeight: 600,
            color: '#2A3A33',
            letterSpacing: '-0.01em',
            marginBottom: 16,
          }}
        >
          Feridas & Cuidados
        </h1>
        <p style={{ ...sans, fontSize: 15, color: '#3D5247', opacity: 0.7, lineHeight: 1.6 }}>
          {allPosts.length} posts · Feed 1080 × 1350 px · Reels 1080 × 1920 px · Para exportar: <code style={{ background: '#E8E4DA', padding: '2px 8px', borderRadius: 4, fontSize: 13 }}>npm run build &amp;&amp; npm run export</code>
        </p>
      </div>

      {/* Grid de posts */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 48,
        }}
      >
        {allPosts.map((post) => (
          <div key={post.id}>
            {/* Label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 14,
              }}
            >
              <p
                style={{
                  ...sans,
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  color: '#5A7A6B',
                  textTransform: 'uppercase',
                }}
              >
                {post.data.type}
              </p>
              <p
                style={{
                  ...sans,
                  fontSize: 12,
                  color: '#2A3A33',
                  opacity: 0.4,
                  letterSpacing: '0.04em',
                }}
              >
                {post.filename}
              </p>
            </div>

            {/* Post em miniatura */}
            <a
              href={`/?post=${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none' }}
              title={`Abrir ${post.id} em tamanho completo`}
            >
              <PostFrame scale={SCALE} width={post.width ?? 1080} height={post.height ?? 1350}>
                <AnyPostRenderer data={post.data} />
              </PostFrame>
            </a>

            {/* ID */}
            <p
              style={{
                ...sans,
                fontSize: 12,
                color: '#2A3A33',
                opacity: 0.4,
                marginTop: 10,
                letterSpacing: '0.04em',
              }}
            >
              {post.id}
            </p>
          </div>
        ))}
      </div>

      {/* Paleta de cores */}
      <div style={{ marginTop: 80, borderTop: '1px solid #D4CDB8', paddingTop: 48 }}>
        <p
          style={{
            ...sans,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.18em',
            color: '#5A7A6B',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Identidade Visual
        </p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[
            { name: 'Cipreste', hex: '#2A3A33' },
            { name: 'Sálvia', hex: '#5A7A6B' },
            { name: 'Terracota', hex: '#C97862' },
            { name: 'Pergaminho', hex: '#F7F2E8' },
          ].map((color) => (
            <div key={color.hex} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  background: color.hex,
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              />
              <div>
                <p style={{ ...sans, fontSize: 13, fontWeight: 500, color: '#2A3A33' }}>{color.name}</p>
                <p style={{ ...sans, fontSize: 11, color: '#2A3A33', opacity: 0.4 }}>{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const params = new URLSearchParams(window.location.search)
  const isExport = params.has('post')
  const isPrecificacao = params.get('page') === 'precificacao'

  if (isPrecificacao) return <PrecificacaoPage />
  if (isExport) return <ExportView />
  return <PreviewGrid />
}
