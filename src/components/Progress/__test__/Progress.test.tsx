import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render, screen } from '@testing-library/react'
import Progress from '../Progress'

expect.extend(matchers)

const TestProgress = () => {
  return <Progress value={50} max={100} completeMessage="Complete!" />
}

describe('Props', () => {
  afterEach(cleanup)

  it('should render a Progress component', () => {
    render(<TestProgress />)
    const progressComponent = screen.getByTestId('progress-test')

    expect(progressComponent).toBeInTheDocument()
  })

  it('should render the indicator at 50%', () => {
    render(<TestProgress />)
    const indicator = screen.getByTestId('progress-indicator-test')

    expect(indicator).toHaveStyleRule('width', '50%')
  })

  it('should render indicator text to say "50%"', () => {
    render(<TestProgress />)
    const indicatorText = screen.getByTestId('progress-indicator-text-test')

    expect(indicatorText).toHaveTextContent('50%')
  })

  it('should render indicator text to say "50.55%"', () => {
    render(
      <Progress
        value={50.55}
        max={100}
        includeDecimals={2}
        completeMessage="Complete!"
      />
    )
    const indicatorText = screen.getByTestId('progress-indicator-text-test')

    expect(indicatorText).toHaveTextContent('50.55%')
  })

  it('should render indicator text to say "Done!" when value is the same as max', () => {
    render(<Progress value={100} max={100} completeMessage="Done!" />)
    const indicatorText = screen.getByTestId('progress-indicator-text-test')

    expect(indicatorText).toHaveTextContent('Done!')
  })

  it('should render indicator text to say "Done!" when value is more than max', () => {
    render(<Progress value={100} max={100} completeMessage="Done!" />)
    const indicatorText = screen.getByTestId('progress-indicator-text-test')

    expect(indicatorText).toHaveTextContent('Done!')
  })
})
