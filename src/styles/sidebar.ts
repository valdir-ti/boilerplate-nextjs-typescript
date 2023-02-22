import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  open?: boolean
}

export const Container = styled.div<Props>`
  grid-area: sidebar;
  width: ${(props) => (props.open ? '24rem' : '6rem')};
  height: 100vh;
  background-color: green;
  /* background-color: rgb(253, 252, 255); */
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

export const Title = styled.p<Props>`
  font-size: ${(props) => (props.open ? '10px' : '11px')};
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: ${(props) => (props.open ? '10px' : '18px')};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  display: flex;
`
export const Bottom = styled.div`
  height: calc(100vh - 5rem);
  background-color: rgb(253, 252, 255);
`

export const ContainerCenterUl = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`
export const ContainerCenterLi = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  color: gray;
  &:hover,
  &:active {
    background-color: antiquewhite;
    color: azure;
  }
`

export const ContainerCenterSpan = styled.span<Props>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  @media only screen and (max-width: 550px) {
    display: block;
  }
`
export const IconWrapper = styled.span<Props>`
  font-weight: 600;
  font-size: 13px;
  margin-left: ${(props) => (props.open ? '10px' : '20px')};
  margin-right: 5px;
`
