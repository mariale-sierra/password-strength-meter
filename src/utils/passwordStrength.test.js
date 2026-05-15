import { describe, it, expect } from 'vitest'
import { getPasswordStrength } from './passwordStrength'

describe('getPasswordStrength', () => {
  it('returns vacía for empty password', () => {
    expect(getPasswordStrength('')).toBe('vacía')
  })

  it('returns débil for short passwords', () => {
    expect(getPasswordStrength('abc')).toBe('débil')
  })

  it('returns media for 8+ chars without numbers', () => {
    expect(getPasswordStrength('abcdefgh')).toBe('media')
  })

  it('returns fuerte for password with number', () => {
    expect(getPasswordStrength('abcdefgh1')).toBe('fuerte')
  })

  it('returns muy fuerte for password with number and symbol', () => {
    expect(getPasswordStrength('abcdefgh1!')).toBe('muy fuerte')
  })
})