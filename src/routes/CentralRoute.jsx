import ProtectedRoute from './ProtectedRoute'
import { useAuth } from '../hooks/useAuth'
export default function CentralRoute() { const { role } = useAuth(); return <ProtectedRoute role="central_admin" loginPath="/central/login" home={role === 'hospital_admin' ? '/hospital/dashboard' : '/central/login'} /> }
