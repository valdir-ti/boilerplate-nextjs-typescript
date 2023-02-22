import type { NextPage } from 'next'

import Card from './components/Card'

import { Container, CardTwo, CardThree, CardFour, CardOne } from 'styles'

const Home: NextPage = () => {
  return (
    <Container>
      <CardOne>
        <Card title="card 1" />
      </CardOne>
      <CardTwo>
        <Card title="card 2" />
      </CardTwo>
      <CardThree>
        <Card title="card 3" />
      </CardThree>
      <CardFour>
        <Card title="card 4" />
      </CardFour>
    </Container>
  )
}

export default Home
