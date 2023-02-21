import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Login from '../../pages/login'

describe('<Login />', () => {
  it('should render a heading', () => {
    render(<Login />)
    expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(<Login />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
