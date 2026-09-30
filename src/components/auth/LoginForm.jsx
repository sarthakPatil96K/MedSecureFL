import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../common/ui'
export const Field = ({ label, ...p }) => <label className="mb-3 block text-sm"><span className="mb-1 block text-slate-600">{label}</span><input required {...p} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-teal-500" /></label>
export default function LoginForm({ loginFn, redirect, hint, registerLink }) {
  const [email, setEmail] = useState(''); const [pw, setPw] = useState(''); const [err, setErr] = useState(''); const { login } = useAuth(); const nav = useNavigate()
  const submit = async (e) => { e.preventDefault(); try { const { user, token } = await loginFn(email, pw); login(user, token); nav(redirect) } catch (x) { setErr(x.message) } }
  return <form onSubmit={submit}><Field label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} /><Field label="Password" type="password" value={pw} onChange={e => setPw(e.target.value)} />
    {err && <p className="mb-3 rounded bg-red-50 px-3 py-2 text-sm text-red-700">{err}</p>}
    <Button className="w-full">Login</Button><p className="mt-4 text-xs text-slate-400">Demo: {hint}</p>
    {registerLink && <Link to="/hospital/register" className="mt-2 block text-sm text-teal-600">Register a hospital</Link>}</form>
}
