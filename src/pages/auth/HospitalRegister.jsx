import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../../components/auth/AuthLayout'; import { Field } from '../../components/auth/LoginForm'
import { Button, StatusBadge } from '../../components/common/ui'
import { registerHospital } from '../../services/authService'; import { useApp } from '../../context/AppContext'
const fields = [['name','Hospital Name'],['admin','Administrator Name'],['email','Official Email','email'],['phone','Phone Number','tel'],['password','Password','password'],['confirm','Confirm Password','password']]
export default function HospitalRegister() {
  const { hospitals, addHospital } = useApp(); const [f, setF] = useState({}); const [err, setErr] = useState(''); const [done, setDone] = useState(null)
  const submit = async (e) => { e.preventDefault(); if (f.password !== f.confirm) return setErr('Passwords do not match.')
    const r = await registerHospital(f, hospitals.length); setDone(r)
    addHospital({ id: r.id, name: f.name, clientId: r.clientId, status: 'PENDING', blockchain: 'PENDING', identity: r.identity, lastRound: 0, accuracy: 0, f1: 0, images: 0, classes: 0, storage: 'Hospital Environment', trainTime: '-', reliability: 0, registered: new Date().toISOString().slice(0, 10) }) }
  if (done) return <AuthLayout title="Registration Submitted ✓" subtitle="Blockchain Identity Created ✓">
    <div className="space-y-1 text-sm"><p>Hospital ID: <b>{done.id}</b></p><p>Client ID: <b>{done.clientId}</b></p><p>Blockchain Identity: <b>{done.identity}</b></p><p>Authorization Status: <StatusBadge status="PENDING" /></p></div>
    <p className="my-4 text-sm text-slate-600">Your hospital registration has been submitted to the Central Authority for approval.</p><Link to="/hospital/login"><Button variant="outline">Back to login</Button></Link></AuthLayout>
  return <AuthLayout title="Register Hospital" subtitle="Join the MedSecureFL network."><form onSubmit={submit}>
    <Field label="Hospital ID (assigned on submit)" disabled placeholder="Auto-generated" required={false} />
    {fields.map(([k, l, t]) => <Field key={k} label={l} type={t || 'text'} onChange={e => setF({ ...f, [k]: e.target.value })} />)}
    {err && <p className="mb-3 text-sm text-red-700">{err}</p>}<Button className="w-full">Register Hospital</Button></form></AuthLayout>
}
