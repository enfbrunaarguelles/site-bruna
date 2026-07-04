export const SENHA = 'bruna2024'

export const tabelaPresencial = [
  { codigo: 'C01', servico: 'Consulta inicial de feridas', material: '—', valor: 350, obs: 'Avaliação completa, plano terapêutico e orientação' },
  { codigo: 'C02', servico: 'Consulta de retorno', material: '—', valor: 220, obs: 'Reavaliação e ajuste de conduta' },
  { codigo: 'CU01', servico: 'Curativo simples', material: 'Até R$ 25', valor: 150, obs: 'Ferida pequena ou baixa complexidade' },
  { codigo: 'CU02', servico: 'Curativo intermediário', material: 'Até R$ 70', valor: 260, obs: 'Ferida moderada ou maior consumo de material' },
  { codigo: 'CU03', servico: 'Curativo complexo', material: 'Até R$ 150', valor: 450, obs: 'Ferida extensa ou maior complexidade técnica' },
  { codigo: 'CU04', servico: 'Curativo especial', material: 'Acima do limite', valor: null, obs: 'Coberturas especiais cobradas à parte' },
  { codigo: 'L01', servico: 'Laserterapia avulsa', material: '—', valor: 140, obs: 'Sessão isolada' },
  { codigo: 'L02', servico: 'Laser associada ao curativo', material: '—', valor: 90, obs: 'Adicional ao curativo' },
]

export const tabelaDomiciliar = [
  { codigo: 'D01', servico: 'Consulta inicial domiciliar', material: '—', valor: 500, obs: 'Inclui deslocamento em região próxima' },
  { codigo: 'D02', servico: 'Retorno domiciliar', material: '—', valor: 350, obs: 'Reavaliação domiciliar' },
  { codigo: 'DCU01', servico: 'Curativo simples domiciliar', material: 'Até R$ 25', valor: 250, obs: 'Com deslocamento e estrutura fora do consultório' },
  { codigo: 'DCU02', servico: 'Curativo intermediário domiciliar', material: 'Até R$ 70', valor: 390, obs: 'Com deslocamento e maior tempo reservado' },
  { codigo: 'DCU03', servico: 'Curativo complexo domiciliar', material: 'Até R$ 150', valor: 620, obs: 'Com deslocamento e maior complexidade' },
  { codigo: 'DCU04', servico: 'Curativo especial domiciliar', material: 'Acima do limite', valor: null, obs: 'Coberturas especiais cobradas à parte' },
  { codigo: 'DL01', servico: 'Laserterapia domiciliar avulsa', material: '—', valor: 220, obs: 'Sessão isolada em domicílio' },
  { codigo: 'DL02', servico: 'Laser associada ao curativo domiciliar', material: '—', valor: 120, obs: 'Adicional ao curativo domiciliar' },
]

export const deslocamento = [
  { regiao: 'Bom Pastor, São Mateus, Alto dos Passos, Centro, Santa Helena, Granbery', taxa: 'Incluso ou + R$ 50', tipo: 'Região próxima' },
  { regiao: 'Cascatinha, Estrela Sul, Teixeiras, Manoel Honório, Mariano Procópio', taxa: '+ R$ 70 a R$ 100', tipo: 'Região intermediária' },
  { regiao: 'Benfica, Santa Cruz, Linhares, Grama, Retiro, São Pedro, Nova Era', taxa: '+ R$ 120 a R$ 180', tipo: 'Região distante' },
  { regiao: 'Distritos ou cidades próximas', taxa: 'Sob consulta', tipo: 'Avaliar caso a caso' },
]

export const pacotes = [
  { tipo: 'Presencial', codigo: 'P01', pacote: 'Pacote Básico', inclui: 'Consulta inicial + 4 curativos simples + 1 reavaliação', valor: 850 },
  { tipo: 'Presencial', codigo: 'P02', pacote: 'Pacote Intermediário', inclui: 'Consulta inicial + 4 curativos intermediários + 1 reavaliação + 2 laserterapias', valor: 1450 },
  { tipo: 'Presencial', codigo: 'P03', pacote: 'Pacote Avançado', inclui: 'Consulta inicial + 4 curativos complexos + 1 reavaliação + 4 laserterapias', valor: 2400 },
  { tipo: 'Domiciliar', codigo: 'PD01', pacote: 'Pacote Domiciliar Básico', inclui: 'Consulta inicial + 4 curativos simples + 1 reavaliação', valor: 1400 },
  { tipo: 'Domiciliar', codigo: 'PD02', pacote: 'Pacote Domiciliar Intermediário', inclui: 'Consulta inicial + 4 curativos intermediários + 1 reavaliação + 2 laserterapias', valor: 2300 },
  { tipo: 'Domiciliar', codigo: 'PD03', pacote: 'Pacote Domiciliar Avançado', inclui: 'Consulta inicial + 4 curativos complexos + 1 reavaliação + 4 laserterapias', valor: 3600 },
]

export type Material = {
  id: string
  categoria: string
  item: string
  custoUnitario: number | null
}

export const materiais: Material[] = [
  { id: 'm1',  categoria: 'EPIs e biossegurança', item: 'Luva de procedimento', custoUnitario: 0.30 },
  { id: 'm2',  categoria: 'EPIs e biossegurança', item: 'Luva estéril', custoUnitario: 2.89 },
  { id: 'm3',  categoria: 'EPIs e biossegurança', item: 'Máscara cirúrgica', custoUnitario: 0.64 },
  { id: 'm4',  categoria: 'EPIs e biossegurança', item: 'Máscara PFF2/N95', custoUnitario: 8.00 },
  { id: 'm5',  categoria: 'EPIs e biossegurança', item: 'Avental descartável', custoUnitario: 7.20 },
  { id: 'm6',  categoria: 'EPIs e biossegurança', item: 'Touca descartável', custoUnitario: 0.20 },
  { id: 'm7',  categoria: 'EPIs e biossegurança', item: 'Propé descartável', custoUnitario: 0.25 },
  { id: 'm8',  categoria: 'EPIs e biossegurança', item: 'Óculos ou protetor facial', custoUnitario: null },
  { id: 'm9',  categoria: 'EPIs e biossegurança', item: 'Campo estéril', custoUnitario: 6.21 },
  { id: 'm10', categoria: 'EPIs e biossegurança', item: 'Saco para descarte', custoUnitario: 0.21 },
  { id: 'm11', categoria: 'Limpeza, irrigação e antissepsia', item: 'Soro fisiológico 0,9% 100 ml', custoUnitario: 7.01 },
  { id: 'm12', categoria: 'Limpeza, irrigação e antissepsia', item: 'Soro fisiológico 0,9% 250 ml', custoUnitario: 7.52 },
  { id: 'm13', categoria: 'Limpeza, irrigação e antissepsia', item: 'Soro fisiológico 0,9% 500 ml', custoUnitario: 12.12 },
  { id: 'm14', categoria: 'Limpeza, irrigação e antissepsia', item: 'Clorexidina aquosa', custoUnitario: null },
  { id: 'm15', categoria: 'Limpeza, irrigação e antissepsia', item: 'Clorexidina alcoólica 0,5%', custoUnitario: 9.03 },
  { id: 'm16', categoria: 'Limpeza, irrigação e antissepsia', item: 'PVPI, se aplicável', custoUnitario: null },
  { id: 'm17', categoria: 'Limpeza, irrigação e antissepsia', item: 'Água destilada / solução de limpeza', custoUnitario: null },
  { id: 'm18', categoria: 'Limpeza, irrigação e antissepsia', item: 'Seringa para irrigação 20 ml', custoUnitario: 0.59 },
  { id: 'm19', categoria: 'Limpeza, irrigação e antissepsia', item: 'Agulha para aspiração/irrigação', custoUnitario: null },
  { id: 'm20', categoria: 'Limpeza, irrigação e antissepsia', item: 'Cuba rim descartável ou bandeja', custoUnitario: null },
  { id: 'm21', categoria: 'Limpeza, irrigação e antissepsia', item: 'Compressa para limpeza (gaze não estéril)', custoUnitario: 0.18 },
  { id: 'm22', categoria: 'Materiais básicos de curativo', item: 'Gaze estéril', custoUnitario: null },
  { id: 'm23', categoria: 'Materiais básicos de curativo', item: 'Compressa estéril', custoUnitario: null },
  { id: 'm24', categoria: 'Materiais básicos de curativo', item: 'Compressa não aderente', custoUnitario: null },
  { id: 'm25', categoria: 'Materiais básicos de curativo', item: 'Atadura de crepe', custoUnitario: 1.75 },
  { id: 'm26', categoria: 'Materiais básicos de curativo', item: 'Atadura de rayon 7,5 cm x 5 m estéril', custoUnitario: 13.00 },
  { id: 'm27', categoria: 'Materiais básicos de curativo', item: 'Algodão ortopédico, se aplicável', custoUnitario: null },
  { id: 'm28', categoria: 'Materiais básicos de curativo', item: 'Esparadrapo', custoUnitario: null },
  { id: 'm29', categoria: 'Materiais básicos de curativo', item: 'Micropore 25 mm x 10 m', custoUnitario: 7.43 },
  { id: 'm30', categoria: 'Materiais básicos de curativo', item: 'Filme transparente', custoUnitario: 95.90 },
  { id: 'm31', categoria: 'Materiais básicos de curativo', item: 'Fixador adesivo', custoUnitario: null },
  { id: 'm32', categoria: 'Materiais básicos de curativo', item: 'Faixa tubular', custoUnitario: null },
  { id: 'm33', categoria: 'Materiais básicos de curativo', item: 'Malha tubular', custoUnitario: null },
  { id: 'm34', categoria: 'Materiais básicos de curativo', item: 'Tesoura (depreciação)', custoUnitario: null },
  { id: 'm35', categoria: 'Materiais básicos de curativo', item: 'Pinça (depreciação)', custoUnitario: null },
  { id: 'm36', categoria: 'Coberturas primárias e especiais', item: 'Hidrogel (tubo 30 g)', custoUnitario: 54.10 },
  { id: 'm37', categoria: 'Coberturas primárias e especiais', item: 'Hidrocoloide (placa 10x10)', custoUnitario: 32.60 },
  { id: 'm38', categoria: 'Coberturas primárias e especiais', item: 'Alginato de cálcio (placa 10x10)', custoUnitario: 38.60 },
  { id: 'm39', categoria: 'Coberturas primárias e especiais', item: 'Alginato com prata', custoUnitario: null },
  { id: 'm40', categoria: 'Coberturas primárias e especiais', item: 'Espuma de poliuretano (10x10)', custoUnitario: 40.00 },
  { id: 'm41', categoria: 'Coberturas primárias e especiais', item: 'Espuma com prata (10x10)', custoUnitario: 47.00 },
  { id: 'm42', categoria: 'Coberturas primárias e especiais', item: 'Carvão ativado (sem prata)', custoUnitario: null },
  { id: 'm43', categoria: 'Coberturas primárias e especiais', item: 'Carvão ativado com prata (10x10)', custoUnitario: 53.57 },
  { id: 'm44', categoria: 'Coberturas primárias e especiais', item: 'Tela não aderente', custoUnitario: null },
  { id: 'm45', categoria: 'Coberturas primárias e especiais', item: 'Tela com petrolatum 7,6x7,6 cm', custoUnitario: 11.70 },
  { id: 'm46', categoria: 'Coberturas primárias e especiais', item: 'Tela com silicone', custoUnitario: null },
  { id: 'm47', categoria: 'Coberturas primárias e especiais', item: 'Cobertura antimicrobiana', custoUnitario: null },
  { id: 'm48', categoria: 'Coberturas primárias e especiais', item: 'Cobertura com PHMB (10,2x10,2 cm)', custoUnitario: 41.90 },
  { id: 'm49', categoria: 'Coberturas primárias e especiais', item: 'Cobertura com prata nanocristalina', custoUnitario: null },
  { id: 'm50', categoria: 'Coberturas primárias e especiais', item: 'Cobertura absorvente', custoUnitario: null },
  { id: 'm51', categoria: 'Coberturas primárias e especiais', item: 'Cobertura superabsorvente', custoUnitario: null },
  { id: 'm52', categoria: 'Coberturas primárias e especiais', item: 'Placa de colágeno', custoUnitario: null },
  { id: 'm53', categoria: 'Coberturas primárias e especiais', item: 'Barreira protetora de pele (spray 28 ml)', custoUnitario: 135.22 },
  { id: 'm54', categoria: 'Coberturas primárias e especiais', item: 'Creme barreira (tubo 92-100 g)', custoUnitario: 100.72 },
  { id: 'm55', categoria: 'Coberturas primárias e especiais', item: 'Protetor cutâneo spray (28 ml)', custoUnitario: 135.22 },
  { id: 'm56', categoria: 'Materiais para desbridamento', item: 'Lâmina de bisturi', custoUnitario: null },
  { id: 'm57', categoria: 'Materiais para desbridamento', item: 'Cabo de bisturi (depreciação)', custoUnitario: null },
]
