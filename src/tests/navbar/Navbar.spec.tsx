import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Navbar from '../../pages/components/Navbar'

describe('<Navbar />', () => {
  it('should render a heading', () => {
    render(<Navbar />)
    expect(screen.getByRole('heading', { name: /Navbar/i })).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(<Navbar />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
