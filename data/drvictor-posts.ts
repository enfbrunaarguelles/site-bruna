// Posts da marca Dr. Victor Costa — Neurologista
// Identidade visual seguindo "Manual da marca Dr Victor.pdf" (pasta public/Dr Víctor)
// Formato: carrossel Instagram, 1080 x 1350 px (4:5)

export type DrVictorPostType =
  | 'dv-capa'
  | 'dv-frase'
  | 'dv-lista'
  | 'dv-cta'

export interface DvCapaData {
  type: 'dv-capa'
  label: string
  titulo: string
  fotoSrc: string
  handle: string
}

export interface DvFraseData {
  type: 'dv-frase'
  numero: string
  texto: string
  destaque?: string
  fundo: 'profundo' | 'sombra'
  handle: string
}

export interface DvListaData {
  type: 'dv-lista'
  numero: string
  label: string
  intro: string
  itens: string[]
  handle: string
}

export interface DvCtaData {
  type: 'dv-cta'
  titulo: string
  subtitulo: string
  cta: string
  handle: string
}

export type DrVictorPostData =
  | DvCapaData
  | DvFraseData
  | DvListaData
  | DvCtaData

export interface DrVictorPost {
  id: string
  filename: string
  data: DrVictorPostData
  width: number
  height: number
}

const W = 1080
const H = 1350

export const drVictorPosts: DrVictorPost[] = [
  {
    id: 'dv-01-capa',
    filename: 'dv-01-capa.png',
    width: W,
    height: H,
    data: {
      type: 'dv-capa',
      label: 'neurologia do sono',
      titulo: 'Você dorme 8 horas e continua cansado o dia todo?',
      fotoSrc: '/Dr%20V%C3%ADctor/DSC08034.jpg',
      handle: '@drvictor_neuro',
    },
  },
  {
    id: 'dv-02-introducao',
    filename: 'dv-02-introducao.png',
    width: W,
    height: H,
    data: {
      type: 'dv-frase',
      numero: '02',
      texto: 'Isso pode ser apneia obstrutiva do sono.',
      fundo: 'profundo',
      handle: '@drvictor_neuro',
    },
  },
  {
    id: 'dv-03-explicacao',
    filename: 'dv-03-explicacao.png',
    width: W,
    height: H,
    data: {
      type: 'dv-frase',
      numero: '03',
      texto: 'Durante o sono, as vias aéreas colabam repetidamente e o cérebro interrompe a respiração por alguns segundos.',
      destaque: 'várias vezes por hora',
      fundo: 'sombra',
      handle: '@drvictor_neuro',
    },
  },
  {
    id: 'dv-04-sinais',
    filename: 'dv-04-sinais.png',
    width: W,
    height: H,
    data: {
      type: 'dv-lista',
      numero: '04',
      label: 'sinais de alerta',
      intro: 'Preste atenção nestes sinais:',
      itens: [
        'Ronco alto e frequente',
        'Engasgos durante o sono',
        'Sonolência excessiva de dia',
        'Dor de cabeça ao despertar',
        'Dificuldade de concentração',
      ],
      handle: '@drvictor_neuro',
    },
  },
  {
    id: 'dv-05-riscos',
    filename: 'dv-05-riscos.png',
    width: W,
    height: H,
    data: {
      type: 'dv-frase',
      numero: '05',
      texto: 'Sem tratamento, a apneia aumenta o risco de hipertensão, AVC, infarto e diabetes.',
      destaque: 'aumenta o risco',
      fundo: 'profundo',
      handle: '@drvictor_neuro',
    },
  },
  {
    id: 'dv-06-cta',
    filename: 'dv-06-cta.png',
    width: W,
    height: H,
    data: {
      type: 'dv-cta',
      titulo: 'O diagnóstico começa com uma avaliação neurológica.',
      subtitulo: 'Identificar a apneia a tempo evita complicações sérias.',
      cta: 'Agende sua consulta.',
      handle: '@drvictor_neuro',
    },
  },
]
