import { Link } from 'react-router-dom'
import { PageHeader, Card, StatusBadge, Button, EmptyState } from '../../components/common/ui'
import { useApp } from '../../context/AppContext'
import { approveHospital, rejectHospital } from '../../services/hospitalService'
export default function HospitalApproval() {
  const { hospitals, setStatus, notify } = useApp(); const pending = hospitals.filter(h => h.status === 'PENDING')
  const act = async (h, ok) => { const r = await (ok ? approveHospital : rejectHospital)(h.id); setStatus(h.id, r.status, r.blockchain); notify(ok ? `${h.name} approved and verified.` : `${h.name} rejected.`) }
  return <><PageHeader title="Hospital Approval" subtitle="Review pending registrations" />
    {!pending.length ? <EmptyState text="No pending hospital requests." /> : <div className="space-y-4">{pending.map(h => <Card key={h.id}><div className="flex flex-wrap items-center justify-between gap-3">
      <div><div className="font-semibold text-navy-900">{h.name}</div><div className="text-sm text-slate-600">{h.id} · {h.clientId} · {h.identity}</div><StatusBadge status="PENDING" /></div>
      <div className="flex gap-2"><Link to={`/central/hospitals/${h.id}`}><Button variant="outline">View</Button></Link><Button variant="danger" onClick={() => act(h, false)}>Reject</Button><Button onClick={() => act(h, true)}>Approve</Button></div></div></Card>)}</div>}</>
}
