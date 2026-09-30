import { hospitals, federatedRounds } from './mockData'
export const getHospitals = async () => hospitals
export const getHospitalById = async (id) => hospitals.find(h => h.id === id)
export const approveHospital = async (id) => ({ id, status: 'ACTIVE', blockchain: 'VERIFIED' })
export const rejectHospital = async (id) => ({ id, status: 'REJECTED', blockchain: 'REVOKED' })
export const getFederatedRounds = async () => federatedRounds
export const getHospitalData = async (id) => hospitals.find(h => h.id === id)
