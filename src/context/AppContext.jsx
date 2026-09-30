import { createContext, useContext, useState } from 'react'
import { hospitals as seed } from '../services/mockData'
const Ctx = createContext(null); export const useApp = () => useContext(Ctx)
export function AppProvider({ children }) {
  const [hospitals, setHospitals] = useState(seed)
  const [notes, setNotes] = useState([])
  const [currentRound] = useState(8)
  const notify = (msg) => { const id = Date.now(); setNotes(n => [...n, { id, msg }]); setTimeout(() => setNotes(n => n.filter(x => x.id !== id)), 3500) }
  const addHospital = (h) => setHospitals(l => [...l, h])
  const setStatus = (id, status, blockchain) => setHospitals(l => l.map(h => h.id === id ? { ...h, status, blockchain } : h))
  return <Ctx.Provider value={{ hospitals, addHospital, setStatus, notify, currentRound }}>
    {children}
    <div className="fixed top-4 right-4 z-50 space-y-2">{notes.map(n => <div key={n.id} className="rounded-lg bg-navy-900 px-4 py-3 text-sm text-white shadow-lg">{n.msg}</div>)}</div>
  </Ctx.Provider>
}
