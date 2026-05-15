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

  it('exactly 8 characters without numbers is media', () => {
    expect(getPasswordStrength('abcdefgh')).toBe('media')
  })
  
  it('7 characters is still débil', () => {
    expect(getPasswordStrength('abcdefg')).toBe('débil') 
  })
  
  it('symbols only and less than 8 chars is débil', () => {
    expect(getPasswordStrength('!!!')).toBe('débil')
    })
})