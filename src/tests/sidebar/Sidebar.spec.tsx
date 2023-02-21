import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Sidebar from '../../pages/components/Sidebar'
import { Top, Bottom } from '../../styles/sidebar'

describe('<Sidebar />', () => {
  it('should render a sidebar', () => {
    render(<Sidebar />)
    expect(
      screen.getByRole('link', { name: /CodeStream/i })
    ).toBeInTheDocument()
  })

  it('should render a top menu', () => {
    render(<Top href="/" />)
  })

  it('should render a bottom menu', () => {
    render(<Bottom />)
  })

  it('should match a snapshot', () => {
    const { container } = render(<Sidebar />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
