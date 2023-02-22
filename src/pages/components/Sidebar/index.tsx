import { Dashboard } from '@mui/icons-material'
import { useContext } from 'react'

import { SidebarContext } from '../../../context/SidebarContext'

import {
  Bottom,
  Container,
  Top,
  ContainerCenterUl,
  ContainerCenterLi,
  StyledLink,
  Title,
  IconWrapper,
  ContainerCenterSpan
} from '../../../styles/sidebar'

const Sidebar = () => {
  const sidebarContext = useContext(SidebarContext)
  const {
    state: { open }
  } = sidebarContext

  return (
    <Container open={open}>
      <Top href="/">{open ? 'CodeStream' : 'CS'}</Top>
      <Bottom>
        <ContainerCenterUl>
          <Title open={open} title={'Main'}>
            MAIN
          </Title>
          <ContainerCenterLi title={'Dashboard'}>
            <StyledLink href="/">
              <IconWrapper open={open}>
                <Dashboard />
              </IconWrapper>
              <ContainerCenterSpan open={open}>Dashboard</ContainerCenterSpan>
            </StyledLink>
          </ContainerCenterLi>
          <Title open={open} title={'Users'}>
            USERS
          </Title>
          <ContainerCenterLi title={'Users'}>
            <StyledLink href="/users">
              <IconWrapper open={open}>
                <Dashboard />
              </IconWrapper>
              <ContainerCenterSpan open={open}>Users</ContainerCenterSpan>
            </StyledLink>
          </ContainerCenterLi>
        </ContainerCenterUl>
      </Bottom>
    </Container>
  )
}

export default Sidebar
