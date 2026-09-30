import ProtectedRoute from './ProtectedRoute'
import { useAuth } from '../hooks/useAuth'
export default function HospitalRoute() { const { role } = useAuth(); return <ProtectedRoute role="hospital_admin" loginPath="/hospital/login" home={role === 'central_admin' ? '/central/dashboard' : '/hospital/login'} /> }
