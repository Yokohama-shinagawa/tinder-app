import React from 'react';

const Operation = (props) => {
    return (
        <div className="operation">
            <button 
                className="btn btn-danger"
                onClick={props.onClickNope}
            >
                <span>✖︎</span>
            </button>
            <button 
                className="btn btn-primary"
                onClick={props.onClickLike}
            >
               <span>●</span> 
            </button>
        </div>
    )
}

export default Operation;