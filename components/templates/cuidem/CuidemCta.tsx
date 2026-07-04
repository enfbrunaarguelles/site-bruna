import { CdCtaData } from '../../../data/cuidem-posts'
import { CD, cdSerif, cdSans } from './brand'
import Stripes from './Stripes'
import LogoBar from './LogoBar'

interface Props { data: CdCtaData }

const PAD_H = 63 + 48

export default function CuidemCta({ data }: Props) {
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
        padding: '0 24px',
      }}>
        <img
          src="/cuidem/logo.png"
          alt="CuiDem-APS"
          style={{ height: 170, width: 'auto', marginBottom: 52 }}
        />

        <h2 style={{
          ...cdSerif,
          fontSize: 48,
          fontWeight: 700,
          lineHeight: 1.3,
          color: CD.texto,
          marginBottom: 36,
        }}>
          {data.titulo}
        </h2>

        <p style={{
          ...cdSans,
          fontSize: 30,
          fontWeight: 400,
          lineHeight: 1.55,
          color: CD.textoClaro,
          marginBottom: 52,
        }}>
          {data.corpo}
        </p>

        <div style={{
          border: `2px solid ${CD.terra}`,
          borderRadius: 4,
          padding: '20px 44px',
          marginBottom: 32,
          width: '100%',
        }}>
          <p style={{
            ...cdSans,
            fontSize: 28,
            fontWeight: 600,
            color: CD.terra,
            letterSpacing: '0.03em',
          }}>
            {data.cta}
          </p>
        </div>

        {data.contato.split('\n').map((linha, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            {i === 0 && (
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#25D366"/>
                <path d="M22.5 9.5C21 8 19 7 16.8 7C12.1 7 8.3 10.8 8.3 15.5C8.3 17.1 8.7 18.6 9.5 20L8 24L12.2 22.5C13.6 23.2 15.2 23.6 16.8 23.6C21.5 23.6 25.3 19.8 25.3 15.1C25.3 12.9 24.3 10.9 22.5 9.5ZM16.8 22.1C15.4 22.1 14 21.7 12.8 21L12.5 20.8L10 21.7L10.9 19.3L10.7 19C9.9 17.8 9.5 16.4 9.5 15C9.5 11.4 12.5 8.4 16.1 8.4C17.9 8.4 19.5 9.1 20.8 10.4C22.1 11.7 22.7 13.3 22.7 15.1C22.8 18.8 19.9 22.1 16.8 22.1ZM19.9 16.6C19.7 16.5 18.6 16 18.4 15.9C18.2 15.8 18.1 15.8 18 16C17.9 16.2 17.4 16.7 17.3 16.9C17.2 17 17.1 17 16.9 16.9C15.8 16.4 15.1 16 14.3 14.8C14.1 14.5 14.4 14.5 14.7 13.9C14.8 13.8 14.7 13.7 14.7 13.6C14.7 13.5 14.2 12.4 14 11.9C13.8 11.5 13.6 11.5 13.5 11.5H13.1C13 11.5 12.8 11.6 12.6 11.8C12.4 12 11.8 12.6 11.8 13.7C11.8 14.8 12.6 15.9 12.7 16C12.8 16.1 14.2 18.3 16.4 19.2C17.9 19.8 18.5 19.9 19.2 19.7C19.7 19.6 20.6 19.1 20.8 18.5C21 17.9 21 17.4 20.9 17.3C20.8 17.1 20.1 16.7 19.9 16.6Z" fill="white"/>
              </svg>
            )}
            <p style={{
              ...cdSans,
              fontSize: 25,
              color: CD.destaque,
              fontWeight: 500,
              lineHeight: 1.6,
            }}>
              {linha}
            </p>
          </div>
        ))}
      </div>

      <p style={{
        position: 'absolute', bottom: 32, right: PAD_H,
        ...cdSans, fontSize: 22, color: CD.textoClaro,
      }}>
        06 / 06
      </p>
    </div>
  )
}
