import { useState } from 'react'
import { PageHeader, Card, Button, ProgressBar, Banner } from '../../components/common/ui'
export default function LocalTraining() {
  const [p, setP] = useState(0); const [run, setRun] = useState(false)
  const start = () => { setRun(true); setP(0); const t = setInterval(() => setP(v => { if (v >= 100) { clearInterval(t); setRun(false); return 100 } return v + 10 }), 300) }
  return <><PageHeader title="Local Training" subtitle="Train on your local dataset" /><Banner>Placeholder simulation. Training runs locally; no data leaves the hospital.</Banner>
    <Card><dl className="mb-4 grid gap-3 text-sm sm:grid-cols-3">{[['Model','Vision Transformer'],['Epochs',5],['Batch Size',32],['Learning Rate','0.0001'],['Differential Privacy','ENABLED']].map(([k, v]) => <div key={k}><dt className="text-slate-500">{k}</dt><dd className="font-medium">{v}</dd></div>)}</dl>
      <Button onClick={start} disabled={run}>START LOCAL TRAINING</Button><div className="mt-4"><ProgressBar value={p} /><p className="mt-1 text-xs text-slate-500">{p}%</p></div></Card></>
}
