import React from 'react';

export const BoardControls = ({onMove, onRotate}:{onMove:()=>void;onRotate:()=>void}) => {
    return (
        <div>
            <button onClick={onMove}>Move</button>
            <button onClick={onRotate}>Rotate</button>
        </div>
    );
};