import React from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import { cleanup, render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import Input from '../Input'

expect.extend(matchers)

type TestProps = {
  label?: string
  disabled?: boolean
  placeholder?: string
  helperText?: string
  hasError?: boolean
  required?: boolean
}

const TestInput = (testProps: TestProps) => {
  const [inputValue, setInputValue] = React.useState('')

  return (
    <Input
      value={inputValue}
      onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      {...testProps}
    />
  )
}

describe('Input', () => {
  afterEach(cleanup)

  it('should render a default Input', () => {
    const component = render(<TestInput />)
    const input = component.getByTestId('input-test')

    expect(input).toBeInTheDocument()
    expect(component.queryByTestId('input-label-test')).not.toBeInTheDocument()
    expect(
      component.queryByTestId('input-helpertext-test')
    ).not.toBeInTheDocument()
  })

  it('should render a disabled Input with the disabled prop is used', () => {
    const component = render(<TestInput disabled />)
    const input = component.getByTestId('input-test')

    expect(input).toHaveAttribute('disabled')
  })

  it('should render an Input with the required attribute', () => {
    const component = render(<TestInput required />)
    const input = component.getByTestId('input-test')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('required')
  })

  it('should render an Input with a placeholder when the placeholder prop is used', () => {
    const component = render(<TestInput placeholder="Placeholder" />)
    const input = component.getByTestId('input-test')

    expect(input).toHaveAttribute('placeholder', 'Placeholder')
  })

  it('should call onChange when input change occurs', () => {
    const mockOnChange = jest.fn()
    const component = render(<Input onchange={mockOnChange} />)
    const input = component.getByTestId('input-test')

    fireEvent.change(input, {
      target: {
        value: 'Hello world.',
      },
    })

    expect(mockOnChange).toHaveBeenCalled
  })

  it('should update input value when onChange is called', async () => {
    const component = render(<TestInput />)
    const input = component.getByTestId('input-test')

    fireEvent.change(input, {
      target: {
        value: 'Hello world',
      },
    })

    expect(input).toHaveValue('Hello world')
  })
})
