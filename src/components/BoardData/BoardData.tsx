export type BoardType = string[][];
export const BoardData = (pos:{x:number, y:number}, obstacles:{x?:number, y?:number} = {}):BoardType => 
    [...Array(10)].map((col, colIndex) => 
        [...Array(10)].map((row, rowIndex) => 
            pos.y === colIndex && pos.x === rowIndex ? 'X' : 
            obstacles.x === rowIndex && obstacles.y === colIndex ? 'O': ' '
        )
    );
