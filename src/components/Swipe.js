import React from 'react';

const Swipe = (props) => {
    return(
        <React.Fragment>
                <div className="profile">
                    <img
                        src={props.dataset[0].imageUrl}
                        alt=""
                        className="profile-image d-block mx-auto"
                    />
                    {props.like &&(
                    <p className="like-stamp stamp">LIKE</p>             
                    )}
                    {props.nope &&(
                        <p className="nope-stamp stamp">NOPE</p>
                    )}
                    <div className="profile-summary">
                    <h2>{props.dataset[0].name}</h2>
                        <p>
                            {props.dataset[0].text}
                        </p>
                    </div>
                </div> 
            )
        </React.Fragment>

    )
}

export default Swipe;