import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render a heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
