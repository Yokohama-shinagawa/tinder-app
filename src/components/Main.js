import React,{useState} from 'react';
import Header from './Header';
import Swipe from './Swipe';
import defaultDataset from '../dataset';
import Operation from './Operation'
import Noone from './Noone'


const Main = () => {
    const [state, setState] = useState({
        dataset: defaultDataset,
        like: false,
        nope: false,
        count: 0,
        isShow: true,
        detail: false,
    });

    const handleLike = () => {
        console.log("Like：",state.like)
        var count = state.count+1
        setState({
            ...state,
            like:true,
            count:count,
        })   
    } 

    const handleNope = () => {
        console.log("Nope：",state.nope)
        var count = state.count+1
        setState({
            ...state,
            nope:true,
            count:count,
        })       
    }

    const changeDetail = () => {
        setState({
            ...state,
            detail:true,
        })
    }

    const hiddenDetail = () => {
        setState({
            ...state,
            detail:false,
        })
    }

    return(
        <React.Fragment>
            {(state.detail || (
                <Header />
            ))}


            {(state.count<state.dataset.length) && (
                <Swipe 
                    data={state.dataset[state.count]}
                    isShow={state.isShow}
                    detail={state.detail}
                    changeDetail={()=>changeDetail()}
                    hiddenDetail={() => hiddenDetail()}
                />
            )}
            {(state.count<state.dataset.length) || (
                <Noone
                />
            )}

            {state.detail || (
                <Operation
                    onClickLike={() => handleLike()}
                    onClickNope={() => handleNope()}
                    like={state.like}
                    nope={state.nope}
                />
            )}


        </React.Fragment>
    )    
}

export default Main;