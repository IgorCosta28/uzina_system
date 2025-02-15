import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>

      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler

          style={{ marginInlineStart: '-14px', flexDirection: 'row', display: 'flex', alignItems: 'center' }}
        >
          <CIcon icon={cilMenu} size="lg" onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })} style={{ marginRight: 20 }} />
          <CHeaderNav className="d-none d-md-flex">
            <CNavItem>
              <CNavLink to="/dashboard" as={NavLink}>
                Dashboard
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink to="/settings" as={NavLink}>Settings</CNavLink>
            </CNavItem>

          </CHeaderNav>
        </CHeaderToggler>
        <CHeaderNav>

        </CHeaderNav>

        <CHeaderNav>
          <AppHeaderDropdown />
        </CHeaderNav>

      </CContainer>

      <CContainer className="px-4" fluid>
        <AppBreadcrumb />
      </CContainer>

    </CHeader>
  )
}

export default AppHeader
