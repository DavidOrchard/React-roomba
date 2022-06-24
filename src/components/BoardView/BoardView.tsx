import {useState, useMemo} from 'react';
import {BoardControls} from '../BoardControls';
import {BoardData, BoardType} from '../BoardData';
import styles from './BoardView.module.css';

const MAX_X = 9;
const MAX_Y = 9;
const START_X = 1;
const START_Y = 1;

const rotate = (current:number) => (current + 1) % 4

export const BoardView = () => {
    const [position, setPosition] = useState({x:START_X, y:START_Y});
    // directions are 0-3 with up as 0.
    const [orientation, setOrientation] = useState(0);
    const obstacles = useMemo(() => ({x:3, y:4}), []);
    const Board:BoardType = useMemo(() => BoardData(position, obstacles), [obstacles, position]);
    const BV = () => (
        <table>
            <tbody>
                {Board.map((row:string[], rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell:string, colIndex) => (<td key={colIndex} data-testid={`${colIndex}-${rowIndex}`} className={styles.cell}>{cell}</td>))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const onRotate = () => {
        setOrientation( rotate(orientation));

        // A poor impl will do something with a switch on a string of the direction, such as 
        // let newOrientation;
        // switch(orientation) {
        //     case 'up':
        //         newOrientation = 'right';
        //         break;
        //     case 'right':
        //         newOrientation = 'down';
        //         break;
        //     case 'down':
        //         newOrientation = 'left';
        //         break;
        //     case 'left':
        //         newOrientation = 'up';
        //         break;
        //     default:
        //         newOrientation = orientation;
        // }
        // setOrientation(newOrientation);
    };

    const onMove = () => {
        let { x, y } = position;
        const vector = [
            [0, -1], [1, 0], [0, 1], [-1, 0]
        ];
        const [xVector, yVector] = vector[orientation];
        x += xVector;
        y += yVector;

        // A more verbose impl is a switch on the direction
        // switch(orientation) {
        //     case 'up':
        //         y--;
        //         break;
        //     case 'down':
        //         y++;
        //         break;
        //     case 'left':
        //         x--;
        //         break;
        //     case 'right':
        //         x++;
        //         break;
        //     default:
        //         break;
        // }
        
        // VIP: Crucial to do bounds test before setting position
        if(x >= 0 && x <= MAX_X && y >= 0 && y <= MAX_Y) {
            // check for collisions with obstacles
            // if(Board[y][x] === ' ') {
                setPosition({x,y});
            // }
        } else {
            setOrientation(rotate(orientation));
        }

    };

    const directions = ['up', 'right', 'down', 'left'];

    return (
        <div>
            <div>Board</div>
            <BV/>
            <div>Roomba oriented {`${directions[orientation]}`}</div>
            <BoardControls onMove={onMove} onRotate={onRotate}/>
        </div>
    );
};