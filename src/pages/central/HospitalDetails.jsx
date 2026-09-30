import { useParams, Link } from 'react-router-dom'
import { PageHeader, Card, StatusBadge, Banner, EmptyState } from '../../components/common/ui'
import { useApp } from '../../context/AppContext'
const KV = ({ rows }) => <dl className="space-y-2 text-sm">{rows.map(([k, v]) => <div key={k} className="flex justify-between gap-4"><dt className="text-slate-500">{k}</dt><dd className="font-medium">{v}</dd></div>)}</dl>
export default function HospitalDetails() {
  const { id } = useParams(); const h = useApp().hospitals.find(x => x.id === id)
  if (!h) return <EmptyState text="Hospital not found." />
  return <><PageHeader title={h.name} subtitle="Hospital profile"><Link to="/central/hospitals" className="text-sm text-teal-600">← All hospitals</Link></PageHeader>
    <Banner>Raw medical data remains inside the hospital.</Banner>
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Profile"><KV rows={[['Hospital ID', h.id],['Client ID', h.clientId],['Blockchain Identity', h.identity],['Status', <StatusBadge status={h.status} />],['Registered', h.registered],['Last Active', h.lastRound ? 'Round ' + h.lastRound : '-']]} /></Card>
      <Card title="Dataset Metadata"><KV rows={[['Images', h.images],['Classes', h.classes],['Storage', h.storage],['Data Transfer', '0 MB']]} /></Card>
      <Card title="Performance"><KV rows={[['Accuracy', h.accuracy + '%'],['F1 Score', h.f1 + '%'],['Training Time', h.trainTime],['Reliability', h.reliability]]} /></Card></div></>
}
