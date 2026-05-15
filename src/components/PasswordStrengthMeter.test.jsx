import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import PasswordStrengthMeter from './PasswordStrengthMeter'

describe('PasswordStrengthMeter', () => {
  it('renders password input', () => {
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('shows vacía initially', () => {
    render(<PasswordStrengthMeter />)

    expect(screen.getByText('vacía')).toBeInTheDocument()
  })

  it('shows fuerte when typing password with number', async () => {
  render(<PasswordStrengthMeter />)

  const input = screen.getByLabelText(/password/i)

  await userEvent.type(input, 'abcdefgh1')

  expect(screen.getByText('fuerte')).toBeInTheDocument()
})
})