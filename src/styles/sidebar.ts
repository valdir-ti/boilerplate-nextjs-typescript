import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidebar;
  width: 24rem;
  height: 100vh;
  background-color: rgb(253, 252, 255);
`

export const Top = styled(Link)`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: rgb(196, 173, 229);
  text-decoration: none;
  font-weight: bold;
`
