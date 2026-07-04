import { PostData } from '../data/posts'
import CapaCarrossel from './templates/CapaCarrossel'
import SlideEducativo from './templates/SlideEducativo'
import SlideErroComum from './templates/SlideErroComum'
import SlideSinaisAlerta from './templates/SlideSinaisAlerta'
import SlideChamadaAcao from './templates/SlideChamadaAcao'
import PostFrase from './templates/PostFrase'
import CapaFoto from './templates/CapaFoto'
import Narrativa from './templates/Narrativa'
import Riscos from './templates/Riscos'
import Orientacao from './templates/Orientacao'
import Encerramento from './templates/Encerramento'
import SlideImagem from './templates/SlideImagem'
import SlideErroCerto from './templates/SlideErroCerto'

interface Props { data: PostData }

export default function PostRenderer({ data }: Props) {
  switch (data.type) {
    case 'capa':          return <CapaCarrossel data={data} />
    case 'educativo':     return <SlideEducativo data={data} />
    case 'erro-comum':    return <SlideErroComum data={data} />
    case 'sinais-alerta': return <SlideSinaisAlerta data={data} />
    case 'cta':           return <SlideChamadaAcao data={data} />
    case 'frase':         return <PostFrase data={data} />
    case 'capa-foto':     return <CapaFoto data={data} />
    case 'narrativa':     return <Narrativa data={data} />
    case 'riscos':        return <Riscos data={data} />
    case 'orientacao':    return <Orientacao data={data} />
    case 'encerramento':  return <Encerramento data={data} />
    case 'slide-imagem':  return <SlideImagem data={data} />
    case 'erro-certo':    return <SlideErroCerto data={data} />
  }
}
