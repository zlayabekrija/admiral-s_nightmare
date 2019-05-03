import {
    Gameboard
} from '../Gameboard'
import {
    Ship
} from '../Ship'

describe('Gameboard', () => {
    const game = Gameboard(10);
    const ship = Ship('Edge', 4);
    test('Place the ship', () => {
        expect(game.position('h', ship, 0, 0)).toEqual(true)
    })
    test('Should be false if already taken position', () => {
        expect(game.position('v', ship, 0, 0)).toBe(false);
    })
    test('Should record the miss', () => {
        expect(game.recieveAttack(0, 7)).toEqual('M');
    })
    test('Should record the hit', () => {
        expect(game.recieveAttack(0, 0)).toEqual('X');
    })
    test('Should return undefined if coords already checked', () => {
        expect(game.recieveAttack(0, 0)).toEqual(undefined)
    })
    test('Should report all sunk', () => {
        expect(game.allSunk({}, {})).toEqual(true);
    })
    test('Should return false if ship not sank', () => {
        expect(game.allSunk(game.horizonShips, game.vShips)).toBe(false)
    })

});