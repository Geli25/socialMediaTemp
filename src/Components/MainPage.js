import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/appData';
import './MainPage.css';
import data from '../data';

import Posts from './Posts';

class MainPage extends Component {

    componentWillMount() {
        // axios.get(' https://s3.amazonaws.com/temp-for-interview/data.json')
        //     .then(response => {
        //         console.log(response);
        //     })
        this.props.updateDesigns(data.designs);
        this.props.updateCurrentUser(data.current_user);
        this.props.updateUsers(data.users);
    }

    render() {
        return (
            <div className="Posts">
            <div className="postsContainer">
                <Posts />
            </div>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    updateDesigns:(designs)=>dispatch(actionCreators.updateDesigns(designs)),
    updateUsers:(users)=>dispatch(actionCreators.updateUsers(users)),
    updateCurrentUser:(currentUser)=>dispatch(actionCreators.updateCurrentUser(currentUser))
})


export default connect(null,mapDispatchToProps)(MainPage);