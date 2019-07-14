import React from 'react';
import { connect } from 'react-redux';

import Post from './Post'

const Posts=(props)=>(props.designs.map((design,index)=>(
    <Post 
        key={design.id}
        id={design.id} 
        comments={design.comments}
        likes={design.likes}
        title={design.title}
        image={design.image}
        user={design.user}
        index={index} /> 
)))

const mapStatetoProps=reduxState=>({
    designs:reduxState.appData.designs
})

export default connect(mapStatetoProps)(Posts);