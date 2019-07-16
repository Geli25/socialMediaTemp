import React,{Component} from 'react';
import * as actionCreators from '../store/actions/appData';

import { connect } from 'react-redux';

class Heart extends Component{
    shouldComponentUpdate(nextProps){
        let liked = this.props.currentUser.liked_designs.includes(this.props.id);;
        let nextLiked=nextProps.currentUser.liked_designs.includes(this.props.id);
        return liked!==nextLiked;
    }
    
    render(){
        return (
            this.props.currentUser.liked_designs.includes(this.props.id) ?
            <img
                src="https://s3.amazonaws.com/temp-for-interview/design_images/misc/like-filled.png"
                onClick={() => {
                    this.props.removeCurrentLikes(this.props.id);
                    this.props.updateLikes("-", this.props.index);
                }} /> :
            <img
                src="https://s3.amazonaws.com/temp-for-interview/design_images/misc/like-empty.png"
                onClick={() => {
                    this.props.addCurrentLikes(this.props.id);
                    this.props.updateLikes("+", this.props.index)
                }} />
        )
    
    }
}

const mapStatetoProps = reduxState => ({
    currentUser: reduxState.appData.currentUser
})

const mapDispatchtoProps=dispatch=>({
    addCurrentLikes:(liked)=>dispatch(actionCreators.addCurrentLikes(liked)),
    removeCurrentLikes:(unliked)=>dispatch(actionCreators.removeCurrentLikes(unliked)),
    updateLikes:(type,index)=>dispatch(actionCreators.updateLikes(type,index))
})

export default connect(mapStatetoProps,mapDispatchtoProps)(Heart);