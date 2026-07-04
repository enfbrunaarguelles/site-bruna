import { useState, useEffect, CSSProperties } from 'react'
import {
  SENHA, materiais, tabelaPresencial, tabelaDomiciliar,
  deslocamento, pacotes,
} from '../data/precificacao-data'

const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" }
const sans: CSSProperties  = { fontFamily: "'DM Sans', system-ui, sans-serif" }

const C = {
  cipestre:   '#2A3A33',
  salvia:     '#5A7A6B',
  terracota:  '#C97862',
  pergaminho: '#F7F2E8',
  branco:     '#FFFFFF',
  borda:      '#D4CDB8',
  textoMedio: '#3D5247',
  textoClaro: '#7A9587',
  bg:         '#E8E4DA',
}

function fmt(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

// ── Login ─────────────────────────────────────────────────────────────────────
function Login({ onLogin }: { onLogin: () => void }) {
  const [val, setVal] = useState('')
  const [err, setErr] = useState(false)

  function tentar() {
    if (val === SENHA) { onLogin() }
    else { setErr(true); setVal('') }
  }

  return (
    <div style={{ ...sans, minHeight: '100vh', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        background: C.pergaminho,
        width: 400,
        border: `1px solid ${C.borda}`,
        boxShadow: '0 2px 32px rgba(42,58,51,0.07)',
        overflow: 'hidden',
      }}>
        {/* Faixa topo */}
        <div style={{ height: 3, background: C.cipestre }} />

        <div style={{ padding: '52px 48px 48px', textAlign: 'center' }}>
          {/* Logo */}
          <img
            src="/@cuidarpelabruna/LOGOTIPO.png"
            alt="Bruna Arguelles"
            style={{ height: 110, width: 'auto', opacity: 0.88, marginBottom: 36 }}
          />

          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 24 }}>
            <div style={{ width: 28, height: 0.5, background: C.terracota, opacity: 0.7 }} />
            <p style={{ ...sans, fontSize: 10, letterSpacing: '0.24em', color: C.salvia, textTransform: 'uppercase' }}>
              Acesso restrito
            </p>
            <div style={{ width: 28, height: 0.5, background: C.terracota, opacity: 0.7 }} />
          </div>

          {/* Título */}
          <h1 style={{ ...serif, fontSize: 28, fontWeight: 500, fontStyle: 'italic', color: C.cipestre, lineHeight: 1.2, marginBottom: 8 }}>
            Tabela de Precificação
          </h1>
          <p style={{ ...sans, fontSize: 13, color: C.textoMedio, marginBottom: 4 }}>
            Bruna Arguelles · Enfermagem Especializada
          </p>
          <p style={{ ...sans, fontSize: 11, color: C.textoClaro, marginBottom: 40, letterSpacing: '0.04em' }}>
            CNPJ 66.913.603/0001-92
          </p>

          {/* Divisor */}
          <div style={{ height: 0.5, background: C.cipestre, opacity: 0.1, marginBottom: 32 }} />

          <input
            type="password"
            placeholder="Senha"
            value={val}
            onChange={e => { setVal(e.target.value); setErr(false) }}
            onKeyDown={e => e.key === 'Enter' && tentar()}
            style={{
              ...sans,
              width: '100%', padding: '13px 16px', fontSize: 14,
              border: `1px solid ${err ? C.terracota : C.borda}`,
              background: C.branco, color: C.cipestre,
              outline: 'none', marginBottom: 10, boxSizing: 'border-box',
            }}
            autoFocus
          />
          {err && <p style={{ ...sans, fontSize: 12, color: C.terracota, marginBottom: 8 }}>Senha incorreta.</p>}

          <button
            onClick={tentar}
            style={{
              ...sans,
              width: '100%', padding: '13px', background: C.cipestre,
              color: C.branco, border: 'none', fontSize: 13,
              fontWeight: 500, letterSpacing: '0.1em', cursor: 'pointer',
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Tabs ──────────────────────────────────────────────────────────────────────
const TABS = ['Seletor de Materiais', 'Simulador', 'Presencial', 'Domiciliar', 'Deslocamento', 'Pacotes']

function Tabs({ active, onChange }: { active: string; onChange: (t: string) => void }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', borderBottom: `0.5px solid ${C.borda}`, marginBottom: 52 }}>
      {TABS.map(t => (
        <button key={t} onClick={() => onChange(t)} style={{
          ...sans, padding: '14px 22px', fontSize: 13,
          fontWeight: active === t ? 500 : 400,
          letterSpacing: active === t ? '0.02em' : '0',
          cursor: 'pointer', border: 'none', background: 'none',
          color: active === t ? C.cipestre : C.textoMedio,
          borderBottom: active === t ? `1.5px solid ${C.terracota}` : '1.5px solid transparent',
          marginBottom: -1, transition: 'all 0.15s',
        }}>
          {t}
        </button>
      ))}
    </div>
  )
}

// ── Label decorativo ──────────────────────────────────────────────────────────
function Label({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
      <div style={{ width: 20, height: 0.5, background: C.terracota, opacity: 0.7 }} />
      <p style={{ ...sans, fontSize: 10, letterSpacing: '0.24em', color: C.salvia, textTransform: 'uppercase' }}>{text}</p>
    </div>
  )
}

// ── Seletor de Materiais ──────────────────────────────────────────────────────
type Selecao = { [id: string]: { ativo: boolean; qtd: number } }

function SeletorMateriais() {
  const [selecao, setSelecao] = useState<Selecao>(() => {
    try { return JSON.parse(localStorage.getItem('prec_selecao') || '{}') } catch { return {} }
  })
  const [custos, setCustos] = useState<{ [id: string]: number }>(() => {
    const base: { [id: string]: number } = {}
    materiais.forEach(m => { if (m.custoUnitario !== null) base[m.id] = m.custoUnitario })
    try { return { ...base, ...JSON.parse(localStorage.getItem('prec_custos') || '{}') } } catch { return base }
  })

  useEffect(() => { localStorage.setItem('prec_selecao', JSON.stringify(selecao)) }, [selecao])
  useEffect(() => { localStorage.setItem('prec_custos', JSON.stringify(custos)) }, [custos])

  const total = materiais.reduce((acc, m) => {
    const s = selecao[m.id]
    return s?.ativo ? acc + (custos[m.id] ?? 0) * (s.qtd || 1) : acc
  }, 0)

  const selecionados = materiais.filter(m => selecao[m.id]?.ativo).length
  const categorias = [...new Set(materiais.map(m => m.categoria))]

  return (
    <div>
      {/* Painel total — estilo pergaminho com faixa cipestre */}
      <div style={{
        background: C.pergaminho, border: `1px solid ${C.borda}`,
        marginBottom: 48, overflow: 'hidden',
      }}>
        <div style={{ height: 2, background: C.cipestre, opacity: 0.8 }} />
        <div style={{ padding: '32px 40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p style={{ ...sans, fontSize: 10, letterSpacing: '0.24em', color: C.salvia, textTransform: 'uppercase', marginBottom: 8 }}>
              Total de materiais selecionados
            </p>
            <p style={{ ...serif, fontSize: 48, fontWeight: 500, fontStyle: 'italic', color: C.cipestre, lineHeight: 1 }}>
              {fmt(total)}
            </p>
            <p style={{ ...sans, fontSize: 12, color: C.textoClaro, marginTop: 8 }}>
              {selecionados} {selecionados === 1 ? 'item selecionado' : 'itens selecionados'}
            </p>
          </div>
          <button
            onClick={() => setSelecao({})}
            style={{
              ...sans, background: 'none', border: `0.5px solid ${C.borda}`,
              padding: '9px 20px', fontSize: 12, color: C.textoMedio,
              letterSpacing: '0.06em', cursor: 'pointer',
            }}
          >
            Limpar seleção
          </button>
        </div>
      </div>

      <p style={{ ...sans, fontSize: 13, color: C.textoMedio, marginBottom: 40, lineHeight: 1.6 }}>
        Marque os materiais utilizados, ajuste o custo unitário e a quantidade.<br />
        O total atualiza automaticamente.
      </p>

      {categorias.map(cat => {
        const itens = materiais.filter(m => m.categoria === cat)
        return (
          <div key={cat} style={{ marginBottom: 36 }}>
            {/* Cabeçalho categoria */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 20, height: 0.5, background: C.terracota, opacity: 0.7 }} />
              <p style={{ ...sans, fontSize: 10, letterSpacing: '0.22em', color: C.salvia, textTransform: 'uppercase' }}>{cat}</p>
              <div style={{ flex: 1, height: 0.5, background: C.cipestre, opacity: 0.08 }} />
            </div>

            {itens.map((m, idx) => {
              const s = selecao[m.id]
              const ativo = s?.ativo ?? false
              const qtd = s?.qtd ?? 1
              const custo = custos[m.id] ?? null
              const subtotal = ativo && custo !== null ? custo * qtd : null

              return (
                <div key={m.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '22px 1fr 130px 88px 120px',
                  alignItems: 'center',
                  gap: 14,
                  padding: '11px 16px',
                  marginBottom: 2,
                  background: ativo ? '#EFF3EF' : (idx % 2 === 0 ? C.pergaminho : C.branco),
                  borderLeft: ativo ? `2px solid ${C.salvia}` : '2px solid transparent',
                  transition: 'all 0.15s',
                }}>
                  <input
                    type="checkbox"
                    checked={ativo}
                    onChange={() => {
                      const cur = selecao[m.id]
                      setSelecao(s => ({ ...s, [m.id]: { ativo: !cur?.ativo, qtd: cur?.qtd ?? 1 } }))
                    }}
                    style={{ width: 15, height: 15, cursor: 'pointer', accentColor: C.salvia }}
                  />

                  <span style={{ ...sans, fontSize: 13, color: C.cipestre, fontWeight: ativo ? 500 : 400 }}>
                    {m.item}
                  </span>

                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', ...sans, fontSize: 11, color: C.textoClaro }}>R$</span>
                    <input
                      type="number"
                      value={custo ?? ''}
                      placeholder="—"
                      min={0} step={0.01}
                      onChange={e => setCustos(c => ({ ...c, [m.id]: parseFloat(e.target.value) || 0 }))}
                      style={{
                        ...sans, width: '100%', padding: '6px 8px 6px 28px', fontSize: 13,
                        border: `0.5px solid ${C.borda}`, background: '#FEFCE8',
                        color: C.cipestre, boxSizing: 'border-box', outline: 'none',
                      }}
                    />
                  </div>

                  <input
                    type="number"
                    value={qtd}
                    min={0.01} step={0.5}
                    onChange={e => setSelecao(s => ({ ...s, [m.id]: { ativo: s[m.id]?.ativo ?? false, qtd: parseFloat(e.target.value) || 1 } }))}
                    disabled={!ativo}
                    style={{
                      ...sans, width: '100%', padding: '6px 8px', fontSize: 13, textAlign: 'center',
                      border: `0.5px solid ${C.borda}`, background: ativo ? '#FEFCE8' : 'transparent',
                      color: C.cipestre, boxSizing: 'border-box', outline: 'none',
                    }}
                  />

                  <span style={{ ...sans, fontSize: 13, fontWeight: ativo ? 500 : 400, color: ativo ? C.cipestre : C.textoClaro, textAlign: 'right' }}>
                    {subtotal !== null ? fmt(subtotal) : '—'}
                  </span>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

// ── Simulador ─────────────────────────────────────────────────────────────────
function Simulador() {
  const DEFAULT = { honorario: 220, material: 110, multiplicador: 1.6, deslocamento: 0, laser: 90 }
  const [vals, setVals] = useState<typeof DEFAULT>(() => {
    try { return { ...DEFAULT, ...JSON.parse(localStorage.getItem('prec_simulador') || '{}') } } catch { return DEFAULT }
  })
  useEffect(() => { localStorage.setItem('prec_simulador', JSON.stringify(vals)) }, [vals])

  const total = vals.honorario + vals.material * vals.multiplicador + vals.deslocamento + vals.laser

  const campos: { key: keyof typeof DEFAULT; label: string; hint: string; step: number; prefix: boolean }[] = [
    { key: 'honorario',    label: 'Honorário técnico',          hint: 'Valor do procedimento / ato técnico',          step: 10,  prefix: true  },
    { key: 'material',     label: 'Custo do material especial',  hint: 'Custo real do material utilizado',             step: 5,   prefix: true  },
    { key: 'multiplicador',label: 'Multiplicador do material',   hint: 'Sugestão: 1,3 a 2,0 conforme logística',      step: 0.1, prefix: false },
    { key: 'deslocamento', label: 'Taxa de deslocamento',        hint: 'Preencher 0 se presencial / região incluída', step: 10,  prefix: true  },
    { key: 'laser',        label: 'Laser associado',             hint: 'Preencher 0 quando não houver laser',         step: 10,  prefix: true  },
  ]

  return (
    <div style={{ maxWidth: 560 }}>
      <Label text="Curativo especial" />
      <h2 style={{ ...serif, fontSize: 32, fontWeight: 500, fontStyle: 'italic', color: C.cipestre, marginBottom: 8 }}>
        Simulador de Valor
      </h2>
      <p style={{ ...sans, fontSize: 13, color: C.textoMedio, marginBottom: 40, lineHeight: 1.7 }}>
        Fórmula: Honorário + (Material × Multiplicador) + Deslocamento + Laser
      </p>

      {campos.map((c, i) => (
        <div key={c.key}>
          {i > 0 && <div style={{ height: 0.5, background: C.cipestre, opacity: 0.07, margin: '0 0 20px' }} />}
          <div style={{ marginBottom: 20 }}>
            <label style={{ ...sans, display: 'block', fontSize: 13, fontWeight: 500, color: C.cipestre, marginBottom: 2 }}>
              {c.label}
            </label>
            <p style={{ ...sans, fontSize: 11, color: C.textoClaro, marginBottom: 10 }}>{c.hint}</p>
            <div style={{ position: 'relative' }}>
              {c.prefix && (
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', ...sans, fontSize: 13, color: C.textoMedio }}>R$</span>
              )}
              <input
                type="number"
                value={vals[c.key]}
                step={c.step} min={0}
                onChange={e => setVals(prev => ({ ...prev, [c.key]: parseFloat(e.target.value) || 0 }))}
                style={{
                  ...sans,
                  width: '100%', padding: `12px 16px 12px ${c.prefix ? '42px' : '16px'}`,
                  fontSize: 16, fontWeight: 500,
                  border: `0.5px solid ${C.borda}`, background: '#FEFCE8',
                  color: C.cipestre, boxSizing: 'border-box', outline: 'none',
                }}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Resultado */}
      <div style={{ height: 0.5, background: C.cipestre, opacity: 0.1, margin: '12px 0 40px' }} />
      <div style={{ background: C.pergaminho, border: `1px solid ${C.borda}`, overflow: 'hidden' }}>
        <div style={{ height: 2, background: C.cipestre, opacity: 0.8 }} />
        <div style={{ padding: '32px 40px', textAlign: 'center' }}>
          <p style={{ ...sans, fontSize: 10, letterSpacing: '0.24em', color: C.salvia, textTransform: 'uppercase', marginBottom: 10 }}>
            Valor final calculado
          </p>
          <p style={{ ...serif, fontSize: 52, fontWeight: 500, fontStyle: 'italic', color: C.cipestre, lineHeight: 1 }}>
            {fmt(total)}
          </p>
          <p style={{ ...sans, fontSize: 11, color: C.textoClaro, marginTop: 12, letterSpacing: '0.02em' }}>
            {fmt(vals.honorario)} + ({fmt(vals.material)} × {vals.multiplicador.toFixed(1)}) + {fmt(vals.deslocamento)} + {fmt(vals.laser)}
          </p>
        </div>
      </div>

      <button
        onClick={() => setVals(DEFAULT)}
        style={{
          ...sans, marginTop: 16, background: 'none', border: `0.5px solid ${C.borda}`,
          padding: '9px 20px', fontSize: 12, color: C.textoMedio,
          letterSpacing: '0.06em', cursor: 'pointer',
        }}
      >
        Restaurar valores padrão
      </button>
    </div>
  )
}

// ── Tabelas ───────────────────────────────────────────────────────────────────
function Th({ children }: { children: string }) {
  return (
    <th style={{
      ...sans, padding: '10px 18px', textAlign: 'left',
      fontSize: 10, fontWeight: 500, letterSpacing: '0.18em',
      color: C.salvia, textTransform: 'uppercase',
      borderBottom: `0.5px solid ${C.borda}`, background: C.pergaminho,
    }}>{children}</th>
  )
}

function TabelaServicos({ dados }: { dados: typeof tabelaPresencial }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', ...sans, fontSize: 13 }}>
        <thead><tr>{['Código','Serviço','Material incluído','Valor','Observações'].map(h => <Th key={h}>{h}</Th>)}</tr></thead>
        <tbody>
          {dados.map((row, i) => (
            <tr key={row.codigo} style={{ background: i % 2 === 0 ? C.branco : C.pergaminho }}>
              <td style={{ padding: '13px 18px', color: C.terracota, fontWeight: 500, whiteSpace: 'nowrap' }}>{row.codigo}</td>
              <td style={{ padding: '13px 18px', color: C.cipestre, fontWeight: 500 }}>{row.servico}</td>
              <td style={{ padding: '13px 18px', color: C.textoMedio }}>{row.material}</td>
              <td style={{ padding: '13px 18px', color: row.valor ? C.cipestre : C.textoClaro, fontWeight: row.valor ? 600 : 400, whiteSpace: 'nowrap' }}>
                {row.valor ? fmt(row.valor) : 'Sob cálculo'}
              </td>
              <td style={{ padding: '13px 18px', color: C.textoMedio, fontSize: 12 }}>{row.obs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TabelaDeslocamento() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', ...sans, fontSize: 13 }}>
        <thead><tr>{['Região','Taxa','Tipo'].map(h => <Th key={h}>{h}</Th>)}</tr></thead>
        <tbody>
          {deslocamento.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? C.branco : C.pergaminho }}>
              <td style={{ padding: '13px 18px', color: C.cipestre }}>{row.regiao}</td>
              <td style={{ padding: '13px 18px', color: C.cipestre, fontWeight: 600, whiteSpace: 'nowrap' }}>{row.taxa}</td>
              <td style={{ padding: '13px 18px', color: C.textoClaro, fontSize: 12 }}>{row.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TabelaPacotes() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', ...sans, fontSize: 13 }}>
        <thead><tr>{['Tipo','Código','Pacote','Inclui','Valor'].map(h => <Th key={h}>{h}</Th>)}</tr></thead>
        <tbody>
          {pacotes.map((row, i) => (
            <tr key={row.codigo} style={{ background: i % 2 === 0 ? C.branco : C.pergaminho }}>
              <td style={{ padding: '13px 18px', color: C.textoClaro, fontSize: 12 }}>{row.tipo}</td>
              <td style={{ padding: '13px 18px', color: C.terracota, fontWeight: 500 }}>{row.codigo}</td>
              <td style={{ padding: '13px 18px', color: C.cipestre, fontWeight: 500 }}>{row.pacote}</td>
              <td style={{ padding: '13px 18px', color: C.textoMedio, fontSize: 12 }}>{row.inclui}</td>
              <td style={{ padding: '13px 18px', color: C.cipestre, fontWeight: 600, whiteSpace: 'nowrap' }}>{fmt(row.valor)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SecaoTitulo({ label, titulo }: { label: string; titulo: string }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <Label text={label} />
      <h2 style={{ ...serif, fontSize: 32, fontWeight: 500, fontStyle: 'italic', color: C.cipestre }}>{titulo}</h2>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function PrecificacaoPage() {
  const [logado, setLogado] = useState(() => localStorage.getItem('prec_auth') === '1')
  const [tab, setTab] = useState(TABS[0])

  function login()  { localStorage.setItem('prec_auth', '1'); setLogado(true) }
  function logout() { localStorage.removeItem('prec_auth'); setLogado(false) }

  if (!logado) return <Login onLogin={login} />

  return (
    <div style={{ ...sans, minHeight: '100vh', background: C.bg }}>
      {/* Faixa topo — como nos posts */}
      <div style={{ height: 3, background: C.cipestre }} />

      {/* Header — sem bloco pesado, integrado ao fundo */}
      <div style={{
        background: C.bg,
        padding: '28px 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: `0.5px solid ${C.borda}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <img
            src="/@cuidarpelabruna/LOGOTIPO.png"
            alt="Bruna Arguelles"
            style={{ height: 64, width: 'auto', opacity: 0.88 }}
          />
          <div style={{ width: 0.5, height: 40, background: C.cipestre, opacity: 0.15 }} />
          <div>
            <p style={{ ...sans, fontSize: 10, letterSpacing: '0.20em', color: C.salvia, textTransform: 'uppercase', marginBottom: 3 }}>
              Enfermagem Especializada
            </p>
            <h1 style={{ ...serif, fontSize: 20, fontWeight: 500, fontStyle: 'italic', color: C.cipestre }}>
              Tabela de Precificação
            </h1>
            <p style={{ ...sans, fontSize: 10, color: C.textoClaro, marginTop: 2, letterSpacing: '0.04em' }}>
              CNPJ 66.913.603/0001-92
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          style={{
            ...sans, background: 'none', border: `0.5px solid ${C.borda}`,
            padding: '9px 20px', fontSize: 12, color: C.textoMedio,
            letterSpacing: '0.06em', cursor: 'pointer',
          }}
        >
          Sair
        </button>
      </div>

      {/* Conteúdo */}
      <main style={{ maxWidth: 1080, margin: '0 auto', padding: '52px 56px 80px' }}>
        <Tabs active={tab} onChange={setTab} />

        {tab === 'Seletor de Materiais' && <SeletorMateriais />}
        {tab === 'Simulador'            && <Simulador />}
        {tab === 'Presencial'           && <><SecaoTitulo label="Consultório"       titulo="Tabela Presencial"      /><TabelaServicos dados={tabelaPresencial} /></>}
        {tab === 'Domiciliar'           && <><SecaoTitulo label="Visita domiciliar" titulo="Tabela Domiciliar"      /><TabelaServicos dados={tabelaDomiciliar} /></>}
        {tab === 'Deslocamento'         && <><SecaoTitulo label="Logística"          titulo="Taxas de Deslocamento"  /><TabelaDeslocamento /></>}
        {tab === 'Pacotes'              && <><SecaoTitulo label="Tratamento contínuo" titulo="Pacotes"              /><TabelaPacotes /></>}

        {/* Rodapé */}
        <div style={{ marginTop: 80, borderTop: `0.5px solid ${C.borda}`, paddingTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ ...sans, fontSize: 11, color: C.textoClaro, letterSpacing: '0.04em' }}>
            Bruna Arguelles · Enfermagem Especializada · CNPJ 66.913.603/0001-92
          </p>
          <p style={{ ...sans, fontSize: 11, color: C.textoClaro, letterSpacing: '0.06em' }}>
            @cuidarpelabruna
          </p>
        </div>
      </main>
    </div>
  )
}
