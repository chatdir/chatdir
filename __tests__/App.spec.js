import React from 'react'
import { create } from 'react-test-renderer'
import App from '../src/App'

describe('App', () => {
  test('snapshot', () => {
    const input = create(<App />)
    expect(input.toJSON()).toMatchSnapshot()
  })
})
