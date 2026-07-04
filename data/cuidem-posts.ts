export interface CdCapaData {
  type: 'cd-capa'
  titulo: string
  subtitulo: string
  tags: string[]
}

export interface CdTextoData {
  type: 'cd-texto'
  numero: string
  label?: string
  titulo: string
  corpo: string
  destaque?: string
}

export interface CdListaData {
  type: 'cd-lista'
  numero: string
  titulo: string
  itens: string[]
  extra?: string[]
}

export interface CdCtaData {
  type: 'cd-cta'
  titulo: string
  corpo: string
  cta: string
  contato: string
}

export type CuidemPostData = CdCapaData | CdTextoData | CdListaData | CdCtaData

export interface CuidemPost {
  id: string
  filename: string
  width: number
  height: number
  data: CuidemPostData
}

export const cuidemPosts: CuidemPost[] = [
  {
    id: 'cd-01-capa', filename: 'cd-01-capa.png', width: 1080, height: 1350,
    data: {
      type: 'cd-capa',
      titulo: 'Você atua na APS e cuida de pessoas idosas com demência?',
      subtitulo: 'Precisamos da sua experiência. Participe da nossa pesquisa.',
      tags: ['Pessoa Idosa', 'Demência', 'APS'],
    },
  },
  {
    id: 'cd-02-pesquisa', filename: 'cd-02-pesquisa.png', width: 1080, height: 1350,
    data: {
      type: 'cd-texto',
      numero: '02',
      label: 'A pesquisa',
      titulo: 'O que estamos investigando',
      corpo: 'Como ocorre o cuidado transicional de enfermagem na Atenção Primária junto a pessoas idosas com demência e suas famílias.',
      destaque: 'Sua vivência profissional é fundamental para este estudo.',
    },
  },
  {
    id: 'cd-03-queremos-saber', filename: 'cd-03-queremos-saber.png', width: 1080, height: 1350,
    data: {
      type: 'cd-lista',
      numero: '03',
      titulo: 'O que queremos saber',
      itens: [
        'Intervenções de enfermagem que favorecem o cuidado transicional',
        'Experiências com os primeiros sinais de demência na APS',
        'Estratégias que geraram bons resultados no cuidado a pessoas idosas e suas famílias',
      ],
    },
  },
  {
    id: 'cd-04-quem-pode', filename: 'cd-04-quem-pode.png', width: 1080, height: 1350,
    data: {
      type: 'cd-lista',
      numero: '04',
      titulo: 'Quem pode participar?',
      itens: [
        'Enfermeiros(as) da **Estratégia de Saúde da Família** atuantes em um dos 94 municípios da Macrorregião Sudeste de Minas Gerais',
      ],
      extra: [
        '⏱ Tempo médio de resposta: 15 minutos.',
        '🔒 Aprovada por comitê de ética com sigilo garantido.\nCAAE: 65551622.3.0000.5147',
      ],
    },
  },
  {
    id: 'cd-05-beneficios', filename: 'cd-05-beneficios.png', width: 1080, height: 1350,
    data: {
      type: 'cd-lista',
      numero: '05',
      titulo: 'O que você recebe ao participar',
      itens: [
        'Artigo científico com os resultados da pesquisa enviado a todos os participantes',
        'Convite para evento científico com apresentação dos achados',
        'Acesso a cursos de atualização e minicursos conforme a demanda identificada',
      ],
    },
  },
  {
    id: 'cd-06-cta', filename: 'cd-06-cta.png', width: 1080, height: 1350,
    data: {
      type: 'cd-cta',
      titulo: 'Sua participação fortalece a ciência e qualifica o cuidado.',
      corpo: 'Contribua para um cuidado de enfermagem mais qualificado para pessoas idosas com demência e suas famílias.',
      cta: 'Acesse o link da pesquisa na bio',
      contato: 'Dúvidas: (32) 99102-7249 - Bruna Arguelles\ngapese1.ufjf@gmail.com',
    },
  },
]
