export type PostType =
  | 'capa'
  | 'educativo'
  | 'erro-comum'
  | 'sinais-alerta'
  | 'cta'
  | 'frase'
  | 'capa-foto'
  | 'narrativa'
  | 'riscos'
  | 'orientacao'
  | 'encerramento'
  | 'slide-imagem'
  | 'erro-certo'

// ─── Tipos originais ────────────────────────────────────────────────────────

export interface CapaData {
  type: 'capa'
  label: string
  titulo: string
  detalhe: string
  handle: string
}

export interface EducativoData {
  type: 'educativo'
  label: string
  titulo: string
  bullets: { numero: string; texto: string }[]
  handle: string
}

export interface ErroComumData {
  type: 'erro-comum'
  titulo: string
  descricao: string
  nota: string
  handle: string
}

export interface SinaisAlertaData {
  type: 'sinais-alerta'
  titulo: string
  sinais: string[]
  handle: string
}

export interface CtaData {
  type: 'cta'
  label: string
  chamada: string
  acao: string
  sub: string
  handle: string
}

export interface FraseData {
  type: 'frase'
  frase: string
  autoria: string
  handle: string
}

// ─── Carrossel 2 — Novos tipos ──────────────────────────────────────────────

export interface CapaFotoData {
  type: 'capa-foto'
  label: string
  titulo: string
  subtitulo: string
  fotoSrc: string
  handle: string
}

export interface NarrativaData {
  type: 'narrativa'
  numero: string
  label: string
  texto: string
  destaque?: string
  variante: 'light' | 'dark-accent'
  handle: string
}

export interface RiscosData {
  type: 'riscos'
  numero: string
  label: string
  intro: string
  itens: string[]
  handle: string
}

export interface OrientacaoData {
  type: 'orientacao'
  numero: string
  label: string
  texto: string
  destaque: string
  handle: string
}

export interface EncerramentoData {
  type: 'encerramento'
  titulo: string
  subtitulo: string
  cta: string
  handle: string
}

export interface SlideImagemData {
  type: 'slide-imagem'
  layout: 'split' | 'produto' | 'capa-imagem'
  label: string
  titulo: string
  descricao: string
  imageSrc: string
  imageAlt: string
  handle: string
}

export interface ErroCertoData {
  type: 'erro-certo'
  numero: string
  erro: string
  certo: string
  handle: string
}

// ─── União ───────────────────────────────────────────────────────────────────

export type PostData =
  | CapaData
  | EducativoData
  | ErroComumData
  | SinaisAlertaData
  | CtaData
  | FraseData
  | CapaFotoData
  | NarrativaData
  | RiscosData
  | OrientacaoData
  | EncerramentoData
  | SlideImagemData
  | ErroCertoData

export interface Post {
  id: string
  filename: string
  data: PostData
  width?: number
  height?: number
}

// ─── Carrossel 1 — Posts originais ──────────────────────────────────────────

export const posts: Post[] = [
  {
    id: 'post-01-capa',
    filename: 'post-01-capa.png',
    data: {
      type: 'capa',
      label: 'guia prático',
      titulo: '5 coisas que eu faria se quisesse que minha lesão fechasse mais rápido',
      detalhe: 'deslize para cada passo →',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'post-02-educativo',
    filename: 'post-02-educativo.png',
    data: {
      type: 'educativo',
      label: 'você sabia?',
      titulo: 'O curativo certo muda tudo',
      bullets: [
        { numero: '01', texto: 'Mantém o ambiente úmido ideal para a migração celular' },
        { numero: '02', texto: 'Protege contra infecção sem sufocar o tecido' },
        { numero: '03', texto: 'Reduz a dor na troca e acelera o fechamento' },
      ],
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'post-03-erro',
    filename: 'post-03-erro.png',
    data: {
      type: 'erro-comum',
      titulo: 'Ferida com mau cheiro não é normal',
      descricao:
        'Odor forte é sinal de bactérias em proliferação ativa. Não é apenas incômodo — é um alerta que pede avaliação especializada.',
      nota: 'Não espere piorar para buscar ajuda.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'post-04-alerta',
    filename: 'post-04-alerta.png',
    data: {
      type: 'sinais-alerta',
      titulo: 'Quando procurar atendimento especializado?',
      sinais: [
        'Ferida sem melhora após 2 a 4 semanas',
        'Odor forte ou secreção com pus',
        'Bordas escurecidas ou tecido necrótico',
        'Dor intensa que não passa',
        'Febre ou mal-estar geral',
      ],
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'post-05-cta',
    filename: 'post-05-cta.png',
    data: {
      type: 'cta',
      label: 'atendimento domiciliar',
      chamada: 'Cuidado especializado no conforto da sua casa',
      acao: 'Agende sua visita',
      sub: 'Mensagem pelo Instagram ou WhatsApp',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'post-06-frase',
    filename: 'post-06-frase.png',
    data: {
      type: 'frase',
      frase: 'Uma ferida bem cuidada não é estética — é qualidade de vida.',
      autoria: 'cuidados em feridas',
      handle: '@cuidarpelabruna',
    },
  },

  // ─── Carrossel 2 — "Ferida que respira" ────────────────────────────────────

  {
    id: 'c2-01-capa',
    filename: 'c2-01-capa.png',
    data: {
      type: 'capa-foto',
      label: 'mito & verdade',
      titulo: 'Esse paciente achava que a ferida tinha que respirar…',
      subtitulo: 'E esse é um dos erros que mais atrasa a cicatrização.',
      fotoSrc: '/RSF_9717.jpg.jpg',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c2-02-pensamento',
    filename: 'c2-02-pensamento.png',
    data: {
      type: 'narrativa',
      numero: '02',
      label: 'o que muitos pensam',
      texto: '"Deixar a ferida aberta ajuda a secar e cicatrizar mais rápido."',
      variante: 'light',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c2-03-realidade',
    filename: 'c2-03-realidade.png',
    data: {
      type: 'narrativa',
      numero: '03',
      label: 'mas na prática…',
      texto: 'Exposta sem proteção, a ferida resseca, sofre mais agressões e cicatriza mais devagar.',
      variante: 'dark-accent',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c2-04-conceito',
    filename: 'c2-04-conceito.png',
    data: {
      type: 'narrativa',
      numero: '04',
      label: 'o que a ciência mostra',
      texto: 'Em muitos casos, a ferida cicatriza melhor em um ambiente úmido controlado, protegido e com cobertura adequada.',
      destaque: 'úmido controlado',
      variante: 'light',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c2-05-riscos',
    filename: 'c2-05-riscos.png',
    data: {
      type: 'riscos',
      numero: '05',
      label: 'atenção',
      intro: 'Sem orientação correta, deixar a ferida "respirar" pode causar:',
      itens: [
        'Ressecamento do leito da ferida',
        'Dor intensa na troca do curativo',
        'Maior risco de contaminação',
        'Trauma e lesão no tecido novo',
        'Atraso significativo na cicatrização',
      ],
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c2-06-orientacao',
    filename: 'c2-06-orientacao.png',
    data: {
      type: 'orientacao',
      numero: '06',
      label: 'a orientação certa',
      texto: 'O ideal não é tampar por tampar nem deixar aberta.',
      destaque: 'O ideal é avaliar corretamente para escolher a cobertura certa para cada fase.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c2-07-encerramento',
    filename: 'c2-07-encerramento.png',
    data: {
      type: 'encerramento',
      titulo: 'Cada ferida tem uma necessidade diferente.',
      subtitulo: 'O curativo certo pode acelerar a cicatrização e evitar complicações.',
      cta: 'Se sua ferida não melhora, me chama. Posso te ajudar.',
      handle: '@cuidarpelabruna',
    },
  },

  // ─── Carrossel 4 — Laserterapia Mão-Pé-Boca ───────────────────────────────

  {
    id: 'c4-01-capa',
    filename: 'c4-01-capa.png',
    data: {
      type: 'slide-imagem',
      layout: 'capa-imagem',
      label: 'caso clínico',
      titulo: 'Ela parou de comer. Com uma sessão de laserterapia, voltou à mesa.',
      descricao: 'deslize para entender →',
      imageSrc: '/les%C3%A3o-aftoide.jpg',
      imageAlt: 'Lesão aftoide na boca de criança com mão-pé-boca',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c4-02-doenca',
    filename: 'c4-02-doenca.png',
    data: {
      type: 'slide-imagem',
      layout: 'split',
      label: 'doença mão-pé-boca',
      titulo: 'Uma doença comum na infância que causa muita dor na boca',
      descricao: 'A doença mão-pé-boca causa úlceras na boca e lesões nas mãos e nos pés. O maior problema: a criança para de comer porque dói demais.',
      imageSrc: '/m%C3%A3o-p%C3%A9-boca.webp',
      imageAlt: 'Lesões da doença mão-pé-boca',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c4-03-problema',
    filename: 'c4-03-problema.png',
    data: {
      type: 'narrativa',
      numero: '03',
      label: 'o que acontece',
      texto: 'As úlceras na boca causam dor intensa. A criança não consegue comer, beber água ou engolir sem sentir dor.',
      variante: 'dark-accent',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c4-04-laser',
    filename: 'c4-04-laser.png',
    data: {
      type: 'slide-imagem',
      layout: 'produto',
      label: 'a solução',
      titulo: 'Laserterapia: alívio da dor sem agulha e sem remédio',
      descricao: 'O laser de baixa potência age no local da lesão, reduz a inflamação e alivia a dor com rapidez. É seguro, não invasivo e pode ser feito em casa.',
      imageSrc: '/recover-mmo.jpg',
      imageAlt: 'Aparelho Recover MMO de laserterapia',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c4-05-mecanismo',
    filename: 'c4-05-mecanismo.png',
    data: {
      type: 'orientacao',
      numero: '05',
      label: 'como o laser age',
      texto: 'O laser não elimina o vírus, mas reduz a dor e acelera a cicatrização das úlceras.',
      destaque: 'Com menos dor, a criança volta a comer. E comer faz parte da recuperação.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c4-06-resultado',
    filename: 'c4-06-resultado.png',
    data: {
      type: 'narrativa',
      numero: '06',
      label: 'o resultado',
      texto: '"Foi a primeira vez que ela comeu em dois dias." Após uma sessão, a dor reduziu e a criança voltou a comer.',
      variante: 'light',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c4-07-cta',
    filename: 'c4-07-cta.png',
    data: {
      type: 'encerramento',
      titulo: 'Seu filho tem feridas na boca e está sem conseguir comer?',
      subtitulo: 'A laserterapia pode aliviar a dor rapidamente.',
      cta: 'Me chama. Faço atendimento domiciliar.',
      handle: '@cuidarpelabruna',
    },
  },

  // ─── Carrossel 3 — Frio x Hidratação (ureia 10%) ───────────────────────────

  {
    id: 'c3-01-capa',
    filename: 'c3-01-capa.png',
    data: {
      type: 'capa',
      label: 'pele & cuidado',
      titulo: 'No frio, a pele resseca. E a maioria hidrata errado.',
      detalhe: 'deslize para entender →',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c3-02-problema',
    filename: 'c3-02-problema.png',
    data: {
      type: 'narrativa',
      numero: '02',
      label: 'o que acontece no frio',
      texto: 'O ar frio tem menos umidade. A pele perde água mais rápido — e fica seca, áspera e irritada.',
      variante: 'light',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c3-03-mito',
    filename: 'c3-03-mito.png',
    data: {
      type: 'narrativa',
      numero: '03',
      label: 'o erro comum',
      texto: 'Qualquer creme não resolve. Sem o ingrediente certo, você hidrata só a superfície — não a célula.',
      variante: 'dark-accent',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c3-04-solucao',
    filename: 'c3-04-solucao.png',
    data: {
      type: 'narrativa',
      numero: '04',
      label: 'o que realmente funciona',
      texto: 'A ureia 10% é humectante: ela penetra o estrato córneo e puxa água para dentro da célula — não só cobre.',
      destaque: 'ureia 10%',
      variante: 'light',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c3-05-concentracao',
    filename: 'c3-05-concentracao.png',
    data: {
      type: 'orientacao',
      numero: '05',
      label: 'a concentração importa',
      texto: 'Ureia 10%: hidratação profunda. Ureia 20–40%: ação queratolítica — descamação terapêutica.',
      destaque: 'Usar a concentração errada não dá resultado — ou faz mais do que o necessário.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c3-06-diabetes',
    filename: 'c3-06-diabetes.png',
    data: {
      type: 'narrativa',
      numero: '06',
      label: 'atenção: pé diabético',
      texto: 'Pacientes com doença do pé diabético não devem passar creme entre os dedos nem em excesso — a umidade nessa região favorece maceração e infecção fúngica.',
      variante: 'dark-accent',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c3-07-cta',
    filename: 'c3-07-cta.png',
    data: {
      type: 'encerramento',
      titulo: 'Pele hidratada cicatriza melhor.',
      subtitulo: 'A pele ao redor de uma ferida precisa de cuidado especial — e o produto certo faz diferença.',
      cta: 'Dúvida sobre o que usar? Me chama. Posso te ajudar.',
      handle: '@cuidarpelabruna',
    },
  },

  // ─── Carrossel 5 — 5 erros no cuidado de feridas em casa ───────────────────

  {
    id: 'c5-01-capa',
    filename: 'c5-01-capa.png',
    data: {
      type: 'capa-foto',
      label: '5 erros no cuidado de feridas em casa',
      titulo: 'Você está cuidando da ferida em casa.',
      subtitulo: 'Mas pode estar errando sem saber.',
      fotoSrc: '/@cuidarpelabruna/IMG_2032.jpg',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c5-02-erro1',
    filename: 'c5-02-erro1.png',
    data: {
      type: 'erro-certo',
      numero: '01',
      erro: 'Usar rifocina em qualquer ferida, sem indicação.',
      certo: 'A bula da Rifocina prevê uso em feridas e cavidades. Antibiótico tópico tem indicação específica: usá-la sem critério favorece resistência bacteriana e não substitui avaliação profissional.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c5-03-erro2',
    filename: 'c5-03-erro2.png',
    data: {
      type: 'erro-certo',
      numero: '02',
      erro: 'Deixar a ferida "respirar" sem curativo.',
      certo: 'Ferida exposta resseca, dói mais e contamina com facilidade. O curativo certo protege e cria o ambiente ideal para cicatrizar.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c5-04-erro3',
    filename: 'c5-04-erro3.png',
    data: {
      type: 'erro-certo',
      numero: '03',
      erro: 'Trocar o curativo todo dia "pra ficar limpo".',
      certo: 'A frequência da troca depende do tipo de ferida, da secreção e da cobertura usada. Trocar demais pode remover tecido que estava se regenerando.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c5-05-erro4',
    filename: 'c5-05-erro4.png',
    data: {
      type: 'erro-certo',
      numero: '04',
      erro: 'Usar água oxigenada para limpar.',
      certo: 'Água oxigenada destrói células novas que estão tentando fechar a ferida. A limpeza correta é com soro fisiológico 0,9%, com cuidado.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c5-06-erro5',
    filename: 'c5-06-erro5.png',
    data: {
      type: 'erro-certo',
      numero: '05',
      erro: 'Esperar "ver se melhora" quando a ferida não fecha.',
      certo: 'Ferida aberta há mais de 2 semanas sem melhora tem uma causa que precisa ser investigada. Não espere: procure avaliação profissional.',
      handle: '@cuidarpelabruna',
    },
  },
  {
    id: 'c5-07-cta',
    filename: 'c5-07-cta.png',
    data: {
      type: 'encerramento',
      titulo: 'Você se reconheceu em algum desses erros?',
      subtitulo: 'Me chama no direct com a palavra FERIDA e eu te oriento no próximo passo. 🤍',
      cta: 'Bruna Arguelles · Enfermagem Especializada',
      handle: '@cuidarpelabruna',
    },
  },
]
