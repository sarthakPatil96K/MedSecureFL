import { Link } from 'react-router-dom'
import { Lock, Network, Link2 } from 'lucide-react'
import { Card, Button } from '../components/common/ui'
const feats = [[Lock,'Privacy','Hospital medical data remains inside the hospital.'],[Network,'Federated AI','Hospitals collaboratively train a shared model.'],[Link2,'Blockchain Audit','Hospital authorization and participation can be audited.']]
const flow = ['Hospital Data','Local Training','Differential Privacy','Model Update','Central Aggregation','Global Model']
export default function Landing() {
  return <div className="min-h-screen">
    <section className="bg-navy-900 px-6 py-20 text-center text-white">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">MEDSECUREFL</h1>
      <p className="mt-3 text-xl text-teal-500">Privacy-Preserving Federated Learning for Medical AI</p>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">Collaborative medical AI training without moving sensitive hospital data.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/central/login"><Button>Central Authority Login</Button></Link>
        <Link to="/hospital/login"><Button variant="outline">Hospital Login</Button></Link>
        <Link to="/hospital/register"><Button variant="outline">Register Hospital</Button></Link></div>
    </section>
    <section className="mx-auto grid max-w-5xl gap-4 px-6 py-12 md:grid-cols-3">{feats.map(([I, t, d]) => <Card key={t}><I className="mb-2 text-teal-600" /><h3 className="font-semibold text-navy-900">{t}</h3><p className="text-sm text-slate-600">{d}</p></Card>)}</section>
    <section className="mx-auto max-w-md px-6 pb-16"><h2 className="mb-4 text-center font-semibold text-navy-900">Architecture</h2>
      <div className="flex flex-col items-center gap-1">{flow.map((s, i) => <div key={s} className="flex flex-col items-center"><div className="w-56 rounded-lg border bg-white py-2 text-center text-sm">{s}</div>{i < flow.length - 1 && <span className="text-teal-600">↓</span>}</div>)}</div>
      <p className="mt-6 text-center text-sm font-medium text-teal-700">Raw medical data stays local. Only privacy-protected model updates are exchanged.</p></section>
  </div>
}
