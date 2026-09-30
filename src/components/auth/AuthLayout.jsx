import { Link } from 'react-router-dom'
export default function AuthLayout({ title, subtitle, children }) {
  return <div className="flex min-h-screen items-center justify-center bg-navy-900 p-4"><div className="w-full max-w-md rounded-xl bg-white p-8">
    <Link to="/" className="text-xs text-teal-600">← MEDSECUREFL</Link><h1 className="mt-2 text-2xl font-semibold text-navy-900">{title}</h1><p className="mb-6 text-sm text-slate-500">{subtitle}</p>{children}</div></div>
}
