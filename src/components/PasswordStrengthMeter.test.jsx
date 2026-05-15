import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import PasswordStrengthMeter from './PasswordStrengthMeter'

describe('PasswordStrengthMeter', () => {
  it('renders password input', () => {
    render(<PasswordStrengthMeter />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows vacía initially', () => {
    render(<PasswordStrengthMeter />)

    expect(screen.getByText('vacía')).toBeInTheDocument()
  })

  it('shows fuerte when typing password with number', async () => {
    render(<PasswordStrengthMeter />)

    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'abcdefgh1')

    expect(screen.getByText('fuerte')).toBeInTheDocument()
  })
})