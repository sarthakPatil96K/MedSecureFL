import { createContext, useState } from 'react'
export const AuthContext = createContext(null)
const load = () => { try { return JSON.parse(localStorage.getItem('msfl_auth')) || { user: null, token: null } } catch { return { user: null, token: null } } }
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(load)
  const login = (user, token) => { const a = { user, token }; localStorage.setItem('msfl_auth', JSON.stringify(a)); setAuth(a) }
  const logout = () => { localStorage.removeItem('msfl_auth'); setAuth({ user: null, token: null }) }
  const u = auth.user
  return <AuthContext.Provider value={{ user: u, role: u?.role, hospitalId: u?.hospitalId, clientId: u?.clientId, token: auth.token, isAuthenticated: !!auth.token, login, logout }}>{children}</AuthContext.Provider>
}
