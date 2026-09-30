import { centralUser, hospitalUsers } from './mockData'
const wait = (v) => new Promise(r => setTimeout(() => r(v), 300))
export const loginCentral = async (email, pw) => { if (email === 'admin@medsecurefl.local' && pw === 'admin123') return wait({ user: centralUser, token: 'mock-central-token' }); throw new Error('Invalid Central Authority credentials.') }
export const loginHospital = async (email, pw) => { if (email === 'hospital@medsecurefl.local' && pw === 'hospital123') return wait({ user: hospitalUsers[0], token: 'mock-hospital-token' }); throw new Error('Invalid hospital credentials.') }
export const registerHospital = async (form, count) => { const n = String(count + 1).padStart(3, '0'); return wait({ id: `HOSP-${n}`, clientId: `CLIENT-${n}`, identity: '0x7FA9...42BD', name: form.name }) }
