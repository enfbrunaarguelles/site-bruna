import { CSSProperties } from 'react'

interface PostFrameProps {
  children: React.ReactNode
  scale?: number
  id?: string
  width?: number
  height?: number
}

export default function PostFrame({ children, scale = 1, id, width = 1080, height = 1350 }: PostFrameProps) {
  const W = width
  const H = height
  const containerStyle: CSSProperties = {
    width: W * scale,
    height: H * scale,
    overflow: 'hidden',
    position: 'relative',
    flexShrink: 0,
    borderRadius: scale < 1 ? 8 : 0,
    boxShadow: scale < 1 ? '0 8px 32px rgba(42,58,51,0.18)' : 'none',
  }

  const innerStyle: CSSProperties = {
    width: W,
    height: H,
    transformOrigin: 'top left',
    transform: `scale(${scale})`,
    position: 'absolute',
    top: 0,
    left: 0,
  }

  return (
    <div style={containerStyle}>
      <div style={innerStyle} id={id}>
        {children}
      </div>
    </div>
  )
}
