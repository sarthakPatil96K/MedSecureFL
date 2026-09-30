import { PageHeader, StatCard, Card, Steps, StatusBadge, Banner } from '../../components/common/ui'
import { useAuth } from '../../hooks/useAuth'
export default function HospitalDashboard() {
  const { user } = useAuth()
  return <><PageHeader title={`Welcome, ${user.name}`} subtitle={`Hospital ID: ${user.hospitalId} · Client ID: ${user.clientId}`}><StatusBadge status="VERIFIED" /></PageHeader>
    <Banner>Your medical dataset stays inside the hospital environment.</Banner>
    <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"><StatCard label="Local Dataset" value="5,240 Images" /><StatCard label="Current Round" value="#08" /><StatCard label="Local Accuracy" value="95.1%" /><StatCard label="Raw Data Transfer" value="0 MB" /><StatCard label="Differential Privacy" value="ENABLED" /><StatCard label="Blockchain" value="VERIFIED" /></div>
    <Card title="Current Federated Round"><Steps steps={['Global Model Received','Local Training','Validation','Differential Privacy','Model Update','Submitted']} /></Card></>
}
