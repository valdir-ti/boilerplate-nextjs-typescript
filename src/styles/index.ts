import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template:
    'sidebar navbar navbar' 5rem
    'sidebar main main' 1fr / 240px 1fr;
`
