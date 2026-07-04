import { CuidemPostData } from '../data/cuidem-posts'
import CuidemCapa from './templates/cuidem/CuidemCapa'
import CuidemTexto from './templates/cuidem/CuidemTexto'
import CuidemLista from './templates/cuidem/CuidemLista'
import CuidemCta from './templates/cuidem/CuidemCta'

interface Props { data: CuidemPostData }

export default function CuidemRenderer({ data }: Props) {
  switch (data.type) {
    case 'cd-capa':   return <CuidemCapa data={data} />
    case 'cd-texto':  return <CuidemTexto data={data} />
    case 'cd-lista':  return <CuidemLista data={data} />
    case 'cd-cta':    return <CuidemCta data={data} />
  }
}
