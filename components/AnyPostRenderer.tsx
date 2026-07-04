import { PostData } from '../data/posts'
import { DrVictorPostData } from '../data/drvictor-posts'
import { CuidemPostData } from '../data/cuidem-posts'
import PostRenderer from './PostRenderer'
import DrVictorRenderer from './DrVictorRenderer'
import CuidemRenderer from './CuidemRenderer'

const DV_TYPES = new Set(['dv-capa', 'dv-frase', 'dv-lista', 'dv-cta'])
const CD_TYPES = new Set(['cd-capa', 'cd-texto', 'cd-lista', 'cd-cta'])

interface Props { data: PostData | DrVictorPostData | CuidemPostData }

export default function AnyPostRenderer({ data }: Props) {
  if (DV_TYPES.has(data.type)) return <DrVictorRenderer data={data as DrVictorPostData} />
  if (CD_TYPES.has(data.type)) return <CuidemRenderer data={data as CuidemPostData} />
  return <PostRenderer data={data as PostData} />
}
