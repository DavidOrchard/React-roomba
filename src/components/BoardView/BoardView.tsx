import React, {useState, useMemo} from 'react';
import {BoardControls} from '../BoardControls';
import {BoardData, BoardType} from '../BoardData';
import styles from './BoardView.module.css';

export const BoardView = () => {
    const [roombaPos, setRoombaPos] = useState({x:3, y:4});
    const [roombaOrientation, setOrientation] = useState("u");
    const obstacles = useMemo(() => ({x:1, y:1}), []);
    const Board:BoardType = useMemo(() => BoardData(roombaPos, obstacles), [obstacles, roombaPos]);
    const BV = useMemo(() => (
        <table>
            <tbody>
                {Board.map((row:string[], rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell:string, colIndex) => (<td key={colIndex} className={styles.cell}>{cell}</td>))}
                    </tr>
                ))}
            </tbody>
        </table>
    ),
    [Board]
    );

    const onRotate = () => {
        let newOrientation;
        switch(roombaOrientation) {
            case 'u':
                newOrientation = 'r';
                break;
            case 'r':
                newOrientation = 'd';
                break;
            case 'd':
                newOrientation = 'l';
                break;
            case 'l':
                newOrientation = 'u';
                break;
            default:
                newOrientation = roombaOrientation;
        }
        setOrientation(newOrientation);
    };

    const onMove = () => {
        let { x, y } = roombaPos;
        switch(roombaOrientation) {
            case 'u':
                y--;
                break;
            case 'd':
                y++;
                break;
            case 'l':
                x--;
                break;
            case 'r':
                x++;
                break;
            default:
                break;
        }
        if(x >= 0 && x <= 9 && y >= 0 && y <=9) {
            if(Board[x][y] === ' ') {
                setRoombaPos({x,y});
            }
        }
    };

    return (
        <div>
            <div>Board</div>
            <BV/>
            <div>Roomba oriented {`${roombaOrientation}`}</div>
            <BoardControls onMove={onMove} onRotate={onRotate}/>
        </div>
    );
};