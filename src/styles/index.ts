import styled from 'styled-components'

interface Props {
  open?: boolean
}

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
  grid-template-rows: 0.2fr 1fr auto;
  grid-template-areas:
    'card1 card2 card3 card4'
    'feature feature chart chart'
    'list list list list';
  grid-gap: 1rem;
`

export const CardOne = styled.div`
  grid-area: card1;
`
export const CardTwo = styled.div`
  grid-area: card2;
`
export const CardThree = styled.div`
  grid-area: card3;
`
export const CardFour = styled.div`
  grid-area: card4;
`
