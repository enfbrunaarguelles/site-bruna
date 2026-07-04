import { CdListaData } from '../../../data/cuidem-posts'
import { CD, cdSerif, cdSans } from './brand'
import Stripes from './Stripes'
import LogoBar from './LogoBar'

interface Props { data: CdListaData }

const PAD_H = 63 + 48

export default function CuidemLista({ data }: Props) {
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
        padding: '32px 0',
      }}>
        <h2 style={{
          ...cdSerif,
          fontSize: 50,
          fontWeight: 700,
          lineHeight: 1.25,
          color: CD.destaque,
          marginBottom: 52,
        }}>
          {data.titulo}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {data.itens.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 24,
              padding: '28px 0',
              borderBottom: i < data.itens.length - 1 ? `1.5px solid rgba(42,37,32,0.12)` : 'none',
            }}>
              <div style={{
                width: 14, height: 14,
                borderRadius: '50%',
                background: CD.sage,
                flexShrink: 0,
                marginTop: 10,
              }} />
              <p style={{ ...cdSans, fontSize: 32, fontWeight: 400, lineHeight: 1.45, color: CD.texto }}>
                {item.split(/\*\*(.+?)\*\*/).map((part, j) =>
                  j % 2 === 1
                    ? <strong key={j} style={{ fontWeight: 700 }}>{part}</strong>
                    : part
                )}
              </p>
            </div>
          ))}
        </div>

        {data.extra && (
          <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {data.extra.map((linha, i) => (
              <p key={i} style={{ ...cdSans, fontSize: 27, fontWeight: 400, color: CD.textoClaro, lineHeight: 1.4 }}>
                {linha}
              </p>
            ))}
          </div>
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
