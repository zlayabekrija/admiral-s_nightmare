import {Ship} from "../Ship";

describe('Ship', () => {
  const ship = Ship('edge',4);
  test('to hit the ship',() => {
      expect(ship.hit(2,['0','0','0','0'])).toBe('X');
  })
  test('to sunk the ship',() => {
    expect(ship.isSunk(['X','X','X','X'])).toBe(true);
  })
  test('the ship isn\'t sunk', () => {
    expect(ship.isSunk(['edge','X','X','X'])).toBe(false);
  })

});
