export const ROLES = { CENTRAL: 'central_admin', HOSPITAL: 'hospital_admin' }
export const CENTRAL_NAV = [
 { section: null, items: [['Dashboard','/central/dashboard'],['Hospitals','/central/hospitals'],['Hospital Approval','/central/hospitals/approval']] },
 { section: 'Federated Learning', items: [['Federated Rounds','/central/federated-rounds'],['Aggregation','/central/aggregation'],['Global Model','/central/global-model'],['Results','/central/results']] },
 { section: 'Security', items: [['Communication','/central/communication'],['Privacy Audit','/central/privacy'],['Blockchain','/central/blockchain'],['Settings','/central/settings']] }]
export const HOSPITAL_NAV = [
 { section: null, items: [['Dashboard','/hospital/dashboard'],['My Hospital','/hospital/my-hospital'],['Local Dataset','/hospital/local-dataset']] },
 { section: 'Federated Learning', items: [['Local Training','/hospital/local-training'],['Federated Round','/hospital/federated-round'],['Model Updates','/hospital/model-updates']] },
 { section: 'Security', items: [['Privacy','/hospital/privacy'],['Communication','/hospital/communication'],['Blockchain Identity','/hospital/blockchain'],['Audit Logs','/hospital/audit'],['Settings','/hospital/settings']] }]
