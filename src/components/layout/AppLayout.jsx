import { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Menu, Bell, LogOut, ShieldCheck } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { useApp } from '../../context/AppContext'
import { CENTRAL_NAV, HOSPITAL_NAV } from '../../utils/constants'
import { StatusBadge } from '../common/ui'
export default function AppLayout() {
  const { user, role, logout } = useAuth(); const { hospitals } = useApp(); const nav = useNavigate(); const [open, setOpen] = useState(false)
  const central = role === 'central_admin'; const groups = central ? CENTRAL_NAV : HOSPITAL_NAV
  const h = hospitals.find(x => x.id === user.hospitalId)
  const out = () => { logout(); nav(central ? '/central/login' : '/hospital/login') }
  return <div className="flex min-h-screen">
    {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />}
    <aside className={`fixed z-40 flex h-full w-64 flex-col overflow-y-auto bg-navy-900 p-4 text-slate-300 transition-transform lg:static lg:translate-x-0 ${open ? '' : '-translate-x-full'}`}>
      <div className="mb-6 flex items-center gap-2 text-white"><ShieldCheck className="text-teal-500" /><div><div className="font-bold leading-tight">MEDSECUREFL</div><div className="text-xs text-teal-500">{central ? 'CENTRAL AUTHORITY' : 'HOSPITAL PORTAL'}</div></div></div>
      {groups.map((g, i) => <div key={i} className="mb-4">{g.section && <div className="mb-1 px-3 text-xs uppercase tracking-wide text-slate-500">{g.section}</div>}
        {g.items.map(([l, to]) => <NavLink key={to} to={to} end onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-teal-600 text-white' : 'hover:bg-navy-800'}`}>{l}</NavLink>)}</div>)}
      <button onClick={out} className="mt-auto flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-navy-800"><LogOut size={16} />Logout</button>
    </aside>
    <div className="min-w-0 flex-1">
      <header className="flex items-center justify-between border-b bg-white px-4 py-3">
        <div className="flex items-center gap-3"><button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu"><Menu /></button>
          {central ? <><span className="font-medium">Central Authority</span><span className="hidden text-sm text-slate-500 sm:inline">System Status: <b className="text-emerald-600">Operational</b></span></>
            : <><span className="font-medium">{user.name}</span><span className="hidden text-sm text-slate-500 sm:inline">{user.hospitalId}</span><StatusBadge status={h?.blockchain || 'VERIFIED'} /></>}</div>
        <div className="flex items-center gap-4"><Bell size={18} className="text-slate-500" /><span className="hidden text-sm sm:inline">{user.name}</span><button onClick={out} title="Logout"><LogOut size={18} className="text-slate-500" /></button></div>
      </header>
      <main className="p-4 sm:p-6"><Outlet /></main>
    </div></div>
}
