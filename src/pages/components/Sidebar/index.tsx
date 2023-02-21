import { Dashboard } from '@mui/icons-material'

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
  function closeSidebar() {
    return
  }

  const open = true

  return (
    <Container>
      <Top href="/">CodeStream</Top>
      <Bottom>
        <ContainerCenterUl>
          <Title open={open} title={'Main'}>
            MAIN
          </Title>
          <ContainerCenterLi title={'Dashboard'} onClick={closeSidebar}>
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
          <ContainerCenterLi title={'Users'} onClick={closeSidebar}>
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
