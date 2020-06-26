import React,{useState, useEffect} from 'react';
import Header from './Header';
import Swipe from './Swipe';
import Operation from './Operation';
import defaultDataset from '../dataset';

const Main = () => {
    const [state, setState] = useState({
        like: false,
        nope: false,
        dataset: defaultDataset,
    });

    const handleLike = () => {
        console.log("Like：",state.like)
        setState({
            ...state,
            like:true,
        })
    } 

    const handleNope = () => {
        console.log("Nope：",state.nope)
        setState({
            ...state,
            nope:true,
        })       
    }

    useEffect(() => {
        console.log(state.dataset[0].name);
    }) 

    return(
        <React.Fragment>
            <Header />
            <Swipe 
                dataset={state.dataset}
                like={state.like}
                nope={state.nope}
            />
            <Operation
                onClickLike={() => handleLike()}
                onClickNope={() => handleNope()}
            />
        </React.Fragment>
    )    
}

export default Main;