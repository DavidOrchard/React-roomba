import {BoardData} from './BoardData';

test('renders board with roomba 3,3', () => {
    const board = BoardData({x:3, y:3});
    expect(board[3][3]).toEqual('X');
    expect(board[0][0]).toEqual(' ');
});