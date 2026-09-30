import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
export default function ProtectedRoute({ role, loginPath, home }) {
  const { isAuthenticated, role: r } = useAuth()
  if (!isAuthenticated) return <Navigate to={loginPath} replace />
  if (r !== role) return <Navigate to={home} replace />
  return <Outlet />
}
