import { CdCapaData } from '../../../data/cuidem-posts'
import { CD, cdSerif, cdSans } from './brand'
import Stripes from './Stripes'
import LogoBar from './LogoBar'

interface Props { data: CdCapaData }

const PAD_H = 63 + 32

export default function CuidemCapa({ data }: Props) {
  return (
    <div style={{ width: 1080, height: 1350, position: 'relative', overflow: 'hidden', background: CD.fundo }}>
      <Stripes />
      <LogoBar />

      <div style={{
        position: 'absolute',
        top: 80, bottom: 0, left: PAD_H, right: PAD_H,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 32px',
      }}>
        <img
          src="/cuidem/logo.png"
          alt="CuiDem-APS"
          style={{ height: 220, width: 'auto', marginBottom: 44 }}
        />

        <h1 style={{
          ...cdSerif,
          fontSize: 62,
          fontWeight: 700,
          lineHeight: 1.2,
          color: CD.texto,
          marginBottom: 28,
        }}>
          {data.titulo}
        </h1>

        <p style={{
          ...cdSans,
          fontSize: 28,
          fontWeight: 400,
          lineHeight: 1.5,
          color: CD.textoClaro,
          marginBottom: 48,
        }}>
          {data.subtitulo}
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
          {data.tags.map((tag, i) => (
            <span key={i} style={{
              ...cdSans,
              fontSize: 22,
              fontWeight: 500,
              padding: '10px 24px',
              borderRadius: 100,
              background: i === 0 ? CD.sage : i === 1 ? CD.terra : CD.destaque,
              color: CD.branco,
            }}>
              {tag}
            </span>
          ))}
        </div>

        <p style={{ ...cdSans, fontSize: 22, color: CD.textoClaro, letterSpacing: '0.04em' }}>
          Arraste →
        </p>
      </div>

      <p style={{
        position: 'absolute', bottom: 32, right: PAD_H,
        ...cdSans, fontSize: 22, color: CD.textoClaro,
      }}>
        01 / 06
      </p>
    </div>
  )
}
