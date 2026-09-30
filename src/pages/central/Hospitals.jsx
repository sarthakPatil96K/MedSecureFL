import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Card, Table, StatusBadge, Button } from '../../components/common/ui'
import { useApp } from '../../context/AppContext'
export default function Hospitals() {
  const { hospitals } = useApp(); const [q, setQ] = useState(''); const [st, setSt] = useState(''); const [bc, setBc] = useState('')
  const rows = hospitals.filter(h => h.name.toLowerCase().includes(q.toLowerCase()) && (!st || h.status === st) && (!bc || h.blockchain === bc))
  const sel = 'rounded-lg border border-slate-300 px-3 py-2 text-sm'
  return <><PageHeader title="Hospitals" subtitle="Registered federated clients" /><Card>
    <div className="mb-4 flex flex-wrap gap-2"><input placeholder="Search hospital" value={q} onChange={e => setQ(e.target.value)} className={sel} />
      <select className={sel} onChange={e => setSt(e.target.value)}><option value="">All statuses</option><option>ACTIVE</option><option>PENDING</option><option>REJECTED</option></select>
      <select className={sel} onChange={e => setBc(e.target.value)}><option value="">All blockchain</option><option>VERIFIED</option><option>PENDING</option></select></div>
    <Table cols={['Hospital','Client ID','Status','Blockchain Status','Last Round','Accuracy','Action']}>{rows.map(h => <tr key={h.id} className="border-b"><td className="px-3 py-2 font-medium">{h.name}</td><td className="px-3">{h.clientId}</td><td className="px-3"><StatusBadge status={h.status} /></td><td className="px-3"><StatusBadge status={h.blockchain} /></td><td className="px-3">{h.lastRound || '-'}</td><td className="px-3">{h.accuracy ? h.accuracy + '%' : '-'}</td><td className="px-3"><Link to={`/central/hospitals/${h.id}`}><Button variant="outline">View</Button></Link></td></tr>)}</Table></Card></>
}
