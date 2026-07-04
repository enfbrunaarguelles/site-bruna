import { CdTextoData } from '../../../data/cuidem-posts'
import { CD, cdSerif, cdSans } from './brand'
import Stripes from './Stripes'
import LogoBar from './LogoBar'

interface Props { data: CdTextoData }

const PAD_H = 63 + 48

export default function CuidemTexto({ data }: Props) {
  return (
    <div style={{ width: 1080, height: 1350, position: 'relative', overflow: 'hidden', background: CD.fundo }}>
      <Stripes />
      <LogoBar />

      <div style={{
        position: 'absolute',
        top: 80, bottom: 0, left: PAD_H, right: PAD_H,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px 0',
      }}>
        {data.label && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
            <div style={{ width: 48, height: 3, background: CD.sage, flexShrink: 0 }} />
            <p style={{ ...cdSans, fontSize: 22, fontWeight: 600, color: CD.sage, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              {data.label}
            </p>
          </div>
        )}

        <h2 style={{
          ...cdSerif,
          fontSize: 52,
          fontWeight: 700,
          lineHeight: 1.25,
          color: CD.texto,
          marginBottom: 44,
        }}>
          {data.titulo}
        </h2>

        <p style={{
          ...cdSans,
          fontSize: 34,
          fontWeight: 400,
          lineHeight: 1.6,
          color: CD.texto,
          marginBottom: data.destaque ? 52 : 0,
        }}>
          {data.corpo}
        </p>

        {data.destaque && (
          <p style={{
            ...cdSerif,
            fontSize: 32,
            fontStyle: 'italic',
            color: CD.destaque,
            lineHeight: 1.4,
          }}>
            {data.destaque}
          </p>
        )}
      </div>

      <p style={{
        position: 'absolute', bottom: 32, right: PAD_H,
        ...cdSans, fontSize: 22, color: CD.textoClaro,
      }}>
        {data.numero} / 06
      </p>
    </div>
  )
}
