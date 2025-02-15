import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilCreditCard,
  cilFingerprint,
  cilHealing,
  cilTerrain,
  cilClipboard
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Gerencia',
  },
  {
    component: CNavItem,
    name: 'Areas',
    to: '/areas',
    icon: <CIcon icon={cilTerrain} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Lideres',
    to: '/lideres/all',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cidadões',
    to: '/cidadoes/all',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Serviços',
  },
  {
    component: CNavItem,
    name: 'Consultas',
    to: '/servicos/consultas',
    icon: <CIcon icon={cilHealing} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'RG',
    to: '/servicos/rg',
    icon: <CIcon icon={cilFingerprint} customClassName="nav-icon" />,
  }
]

export default _nav
