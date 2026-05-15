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

  it('shows débil for short password', async () => {
  render(<PasswordStrengthMeter />)

  const input = screen.getByLabelText(/password/i)

  await userEvent.type(input, 'abc')

  expect(screen.getByText('débil')).toBeInTheDocument()
  })

  it('shows media for 8 characters without number', async () => {
  render(<PasswordStrengthMeter />)

  const input = screen.getByLabelText(/password/i)

  await userEvent.type(input, 'abcdefgh')

  expect(screen.getByText('media')).toBeInTheDocument()
  })

  it('shows muy fuerte for password with number and symbol', async () => {
  render(<PasswordStrengthMeter />)

  const input = screen.getByLabelText(/password/i)

  await userEvent.type(input, 'abcdefgh1!')

  expect(screen.getByText('muy fuerte')).toBeInTheDocument()
  })

  it('returns to vacía when password is cleared', async () => {
  render(<PasswordStrengthMeter />)

  const input = screen.getByLabelText(/password/i)

  await userEvent.type(input, 'abcdefgh1')

  await userEvent.clear(input)

  expect(screen.getByText('vacía')).toBeInTheDocument()
  })
})