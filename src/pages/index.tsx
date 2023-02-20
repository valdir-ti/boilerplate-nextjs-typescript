import type { NextPage } from 'next'
import { Container } from 'styles'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Main />
    </Container>
  )
}

export default Home
