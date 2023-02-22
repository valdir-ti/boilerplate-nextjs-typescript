import { useContext } from 'react'
import { SidebarContext } from '../../../context/SidebarContext'
import { Menu as MenuIcon } from '@mui/icons-material'

import { Container, Left, Right, IconWrapper } from '../../../styles/navbar'

const Navbar = () => {
  const sidebarContext = useContext(SidebarContext)
  const {
    state: { open },
    dispatch: SidebarDispatch
  } = sidebarContext

  function handleSidebar() {
    SidebarDispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  return (
    <Container>
      <Left>
        <IconWrapper>
          <MenuIcon
            onClick={handleSidebar}
            titleAccess={open ? 'Close Menu' : 'Open Menu'}
            style={{ fontSize: '2.5rem' }}
            data-testid="menu-icon"
          />
        </IconWrapper>
      </Left>
      <Right>
        <h2>Right</h2>
      </Right>
    </Container>
  )
}

export default Navbar
