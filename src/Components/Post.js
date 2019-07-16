import React, {Component} from 'react';
import './Post.css';
import Heart from './Heart';

import { connect } from 'react-redux';

class Post extends Component {

    shouldComponentUpdate(nextProps){
        return nextProps.likes!==this.props.likes
    }

    render(){
        const user = this.props.users.find(user => user.id === this.props.user);
        return (
            <div className="Post">
                <div className="postContent">
                    <div className="userInfo">
                        <img src={user.image} />
                        <p><b>{user.name}</b></p>
                        {user.crown ? <img style={{ width: "20px", marginLeft: "2px", marginTop: "-3px" }} src="https://s3.amazonaws.com/temp-for-interview/design_images/misc/crown.png" /> : null}
                    </div>
                    <img src={this.props.image} />
                    <div className="icons">
                        <Heart index={this.props.index} id={this.props.id} />
                        <img src="https://s3.amazonaws.com/temp-for-interview/design_images/misc/comment.png" />
                        <img src="https://s3.amazonaws.com/temp-for-interview/design_images/misc/share.png" />
                    </div>
                    <p className="title"><span><b>{user.name}</b></span>{this.props.title}</p>
                    <p className="likesComments">{this.props.likes} likes, {this.props.comments} comments</p>
                </div>
            </div>
        )
    }
}

const mapStatetoProps=reduxState=>({
    users:reduxState.appData.users,
})

export default connect(mapStatetoProps)(Post);