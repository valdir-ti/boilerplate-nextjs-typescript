import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Sidebar from '../../pages/components/Sidebar'

describe('<Sidebar />', () => {
  it('should render a heading', () => {
    render(<Sidebar />)
    expect(
      screen.getByRole('link', { name: /CodeStream/i })
    ).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(<Sidebar />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
