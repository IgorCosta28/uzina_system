import React from 'react'
import Historico from './views/regencia/Historico'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Lideres = React.lazy(() => import('./views/regencia/Lideres'))
const Cidadoes = React.lazy(() => import('./views/regencia/Cidadoes'))
const Areas = React.lazy(() => import('./views/regencia/Areas'))

const RG = React.lazy(() => import('./views/servicos/rg/RG'))
const Consultas = React.lazy(() => import('./views/servicos/consultas/Consultas'))

const Settings = React.lazy(() => import('./views/settings/Settings'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/areas', name: 'Areas', element: Areas, exact: true },
  { path: '/lideres/:fill', name: 'Lideres', element: Lideres },
  { path: '/cidadoes/:fill', name: 'Cidadões', element: Cidadoes },
  { path: '/servicos/consultas', name: 'Consultas', element: Consultas, exact: true },
  { path: '/servicos/rg', name: 'RG', element: RG },
  { path: '/settings', name: 'Settings', element: Settings },
  { path: '/cidadoes/historico/:cidadao', name: 'Historico', element: Historico },


]

export default routes
