import { useContext } from 'react'
import { Container, Main } from '../styles/layout'

import { SidebarContext } from '../context/SidebarContext'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const sidebarContext = useContext(SidebarContext)

  const {
    state: { open }
  } = sidebarContext

  return (
    <>
      <Container open={open}>
        <Navbar />
        <Sidebar />
        <Main>{children}</Main>
      </Container>
    </>
  )
}

export default DashboardLayout
