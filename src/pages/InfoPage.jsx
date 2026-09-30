import { PageHeader, Card, StatCard, Table, Steps, Bars, Banner, StatusBadge } from '../components/common/ui'
import { pageConfigs } from './pageConfigs'
export default function InfoPage({ cfg }) {
  const c = pageConfigs[cfg]
  return <><PageHeader title={c.title} subtitle={c.subtitle} />{c.banner && <Banner>{c.banner}</Banner>}
    {c.stats && <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{c.stats.map(([l, v]) => <StatCard key={l} label={l} value={v} />)}</div>}
    <div className="grid gap-4 lg:grid-cols-2">
      {c.steps && <Card title={c.stepsTitle || 'Process'}><Steps steps={c.steps} done={c.done} /></Card>}
      {c.bars && <Card title={c.barsTitle || 'Chart (demo data)'}><Bars data={c.bars} /></Card>}
      {c.table && <Card className="lg:col-span-2"><Table cols={c.table.cols}>{c.table.rows.map((r, i) => <tr key={i} className="border-b">{r.map((v, j) => <td key={j} className="px-3 py-2">{['OK','CONFIRMED','PENDING','COMPLETED','ENABLED','IN PROGRESS'].includes(v) ? <StatusBadge status={v} /> : v}</td>)}</tr>)}</Table></Card>}
      {c.note && <Card title="Note" className="lg:col-span-2"><p className="text-sm text-slate-600">{c.note}</p></Card>}</div></>
}
