import { PageHeader, StatCard, Card, Steps, Bars, Banner } from '../../components/common/ui'
import { useApp } from '../../context/AppContext'
export default function CentralDashboard() {
  const { hospitals } = useApp(); const active = hospitals.filter(h => h.status === 'ACTIVE').length
  return <><PageHeader title="Central Authority" subtitle="Federated Learning Control Center" /><Banner>Raw medical data stays local. Only privacy-protected model updates are exchanged.</Banner>
    <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"><StatCard label="Registered Hospitals" value={hospitals.length} /><StatCard label="Active Hospitals" value={active} /><StatCard label="Current Round" value="#08" /><StatCard label="Global Accuracy" value="94.82%" /><StatCard label="Raw Data Transferred" value="0 MB" /></div>
    <div className="grid gap-4 lg:grid-cols-2"><Card title="Accuracy over rounds (demo)"><Bars data={[['R5',91.2],['R6',93.2],['R7',94.1],['R8',94.82]]} max={100} /></Card>
      <Card title="Current Federated Round — Round #08"><Steps steps={['Global Model Distributed','Hospital 01 Training','Hospital 02 Training','Hospital 03 Training','Hospital 04 Training']} done={4} /><p className="mt-3 text-sm text-slate-600">Model Updates: 3/4 · Aggregation: Waiting</p></Card></div></>
}
