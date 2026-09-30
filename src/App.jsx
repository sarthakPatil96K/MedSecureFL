import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import CentralLogin from './pages/auth/CentralLogin'; import HospitalLogin from './pages/auth/HospitalLogin'; import HospitalRegister from './pages/auth/HospitalRegister'
import CentralRoute from './routes/CentralRoute'; import HospitalRoute from './routes/HospitalRoute'; import AppLayout from './components/layout/AppLayout'
import CentralDashboard from './pages/central/CentralDashboard'; import Hospitals from './pages/central/Hospitals'; import HospitalApproval from './pages/central/HospitalApproval'; import HospitalDetails from './pages/central/HospitalDetails'
import HospitalDashboard from './pages/hospital/HospitalDashboard'; import LocalTraining from './pages/hospital/LocalTraining'; import InfoPage from './pages/InfoPage'
const I = (c) => <InfoPage cfg={c} />
export default function App() {
  return <Routes>
    <Route path="/" element={<Landing />} /><Route path="/central/login" element={<CentralLogin />} /><Route path="/hospital/login" element={<HospitalLogin />} /><Route path="/hospital/register" element={<HospitalRegister />} />
    <Route element={<CentralRoute />}><Route element={<AppLayout />}>
      <Route path="/central/dashboard" element={<CentralDashboard />} /><Route path="/central/hospitals" element={<Hospitals />} /><Route path="/central/hospitals/approval" element={<HospitalApproval />} /><Route path="/central/hospitals/:id" element={<HospitalDetails />} />
      <Route path="/central/federated-rounds" element={I('rounds')} /><Route path="/central/federated-rounds/:id" element={I('roundDetails')} /><Route path="/central/aggregation" element={I('aggregation')} /><Route path="/central/global-model" element={I('globalModel')} />
      <Route path="/central/communication" element={I('commCentral')} /><Route path="/central/privacy" element={I('privacyCentral')} /><Route path="/central/blockchain" element={I('blockchain')} /><Route path="/central/results" element={I('results')} /><Route path="/central/settings" element={I('settings')} />
    </Route></Route>
    <Route element={<HospitalRoute />}><Route element={<AppLayout />}>
      <Route path="/hospital/dashboard" element={<HospitalDashboard />} /><Route path="/hospital/my-hospital" element={I('myHospital')} /><Route path="/hospital/local-dataset" element={I('dataset')} /><Route path="/hospital/local-training" element={<LocalTraining />} />
      <Route path="/hospital/federated-round" element={I('federatedRound')} /><Route path="/hospital/model-updates" element={I('modelUpdates')} /><Route path="/hospital/privacy" element={I('privacyHospital')} /><Route path="/hospital/communication" element={I('commHospital')} />
      <Route path="/hospital/blockchain" element={I('bcHospital')} /><Route path="/hospital/audit" element={I('audit')} /><Route path="/hospital/settings" element={I('settings')} />
    </Route></Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}
