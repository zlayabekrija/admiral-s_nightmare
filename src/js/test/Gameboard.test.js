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
        expect(game.position('h', ship, 0, 0)).toEqual([
            ["Edge", "Edge", "Edge", "Edge", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
        ])
    })
    test('Should record the miss', () => {
        expect(game.recieveAttack(0,7)).toEqual('M');
    })
    test('Should record the hit', () => {
        expect(game.recieveAttack(0,2)).toEqual('X');
    })
});