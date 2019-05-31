/* eslint-disable no-undef */
import { Ship } from '../Ship'

describe('Ship', () => {
  const ship = Ship('edge', 4)
  test('to hit the ship', () => {
    expect(ship.hit()).toBe(3)
  })
  test('to sunk the ship', () => {
    expect(ship.isSunk()).toBe(false)
  })
  test('the ship isn\'t sunk', () => {
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
  })
})
