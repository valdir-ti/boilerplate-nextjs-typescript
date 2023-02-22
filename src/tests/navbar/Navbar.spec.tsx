import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Navbar from '../../pages/components/Navbar'

describe('<Navbar />', () => {
  it('should render a left div', () => {
    render(<Navbar />)
    // expect(screen.getByRole('icon', { name: /Navbar/i })).toBeInTheDocument()
  })

  it('should render a right div', () => {
    render(<Navbar />)
    expect(screen.getByRole('heading', { name: /Right/i })).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(<Navbar />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
