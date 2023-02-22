import { Container } from 'styles'

import { SidebarProvider } from '../context/SidebarContext'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <SidebarProvider>
        <Container>
          <Navbar />
          <Sidebar />
          <main>{children}</main>
        </Container>
      </SidebarProvider>
    </>
  )
}

export default DashboardLayout
