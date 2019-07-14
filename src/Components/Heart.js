import React from 'react';
import * as actionCreators from '../store/actions/appData';

import { connect } from 'react-redux';

const Heart=(props)=>(
    props.currentUser.liked_designs.includes(props.id) ? 
    <img 
        src="https://s3.amazonaws.com/temp-for-interview/design_images/misc/like-filled.png"
        onClick={()=>{
            props.removeCurrentLikes(props.id);
            props.updateLikes("-", props.index);
        }}/> : 
    <img 
        src="https://s3.amazonaws.com/temp-for-interview/design_images/misc/like-empty.png"
        onClick={()=>{
            props.addCurrentLikes(props.id);
            props.updateLikes("+", props.index)
        }} />
)

const mapStatetoProps = reduxState => ({
    currentUser: reduxState.appData.currentUser
})

const mapDispatchtoProps=dispatch=>({
    addCurrentLikes:(liked)=>dispatch(actionCreators.addCurrentLikes(liked)),
    removeCurrentLikes:(unliked)=>dispatch(actionCreators.removeCurrentLikes(unliked)),
    updateLikes:(type,index)=>dispatch(actionCreators.updateLikes(type,index))
})

export default connect(mapStatetoProps,mapDispatchtoProps)(Heart);