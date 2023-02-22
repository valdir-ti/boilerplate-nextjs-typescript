import styled from 'styled-components'

interface Props {
  open?: boolean
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: ${(props) => (props.open ? '24rem 1fr' : '6rem 1fr')};
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'sidebar navbar navbar'
    'sidebar main main';
`

export const Main = styled.main`
  padding: 2rem;
  background-color: rgb(243 241 255);
`
