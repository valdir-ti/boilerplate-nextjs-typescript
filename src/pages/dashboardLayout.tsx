import { useContext } from 'react'
import { Container } from 'styles'

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
        <main>{children}</main>
      </Container>
    </>
  )
}

export default DashboardLayout
