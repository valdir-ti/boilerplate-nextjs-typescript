import styled from 'styled-components'

interface Props {
  open?: boolean
}

export const Container = styled.div<Props>`
  width: 100%;
  min-height: 20rem;
  border-radius: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  background-color: antiquewhite;
`
