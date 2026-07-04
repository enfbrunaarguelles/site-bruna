import { DrVictorPostData } from '../data/drvictor-posts'
import ReelsCapa from './templates/drvictor/ReelsCapa'
import ReelsFrase from './templates/drvictor/ReelsFrase'
import ReelsLista from './templates/drvictor/ReelsLista'
import ReelsCta from './templates/drvictor/ReelsCta'

interface Props { data: DrVictorPostData }

export default function DrVictorRenderer({ data }: Props) {
  switch (data.type) {
    case 'dv-capa':  return <ReelsCapa data={data} />
    case 'dv-frase': return <ReelsFrase data={data} />
    case 'dv-lista': return <ReelsLista data={data} />
    case 'dv-cta':   return <ReelsCta data={data} />
  }
}
