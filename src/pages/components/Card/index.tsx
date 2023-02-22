import { Container } from 'styles/card'

type CardProps = {
  title: string
}

const Card = ({ title }: CardProps) => {
  return <Container>{title}</Container>
}

export default Card
