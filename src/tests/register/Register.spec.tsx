import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Register from '../../pages/register'

describe('<Register />', () => {
  it('should render a heading', () => {
    render(<Register />)
    expect(
      screen.getByRole('heading', { name: /Register/i })
    ).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(<Register />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
