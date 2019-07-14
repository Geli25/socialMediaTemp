import * as actionTypes from '../actions/actionTypes';

const initialState = {
    designs:[],
    users:[],
    currentUser:{}
}

const reducer = (curState = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_DESIGNS:
            return {
                ...curState,
                designs:action.designs
            }
        case actionTypes.UPDATE_USERS:
            return {
                ...curState,
                users: action.users
            }
        case actionTypes.UPDATE_CURRENT_USER:
            return {
                ...curState,
                currentUser: action.currentUser
            }
        case actionTypes.ADD_CURRENT_LIKES:
            return {
                ...curState,
                currentUser:{
                    ...curState.currentUser,
                    liked_designs:[
                        ...curState.currentUser.liked_designs,
                        action.liked
                    ]
                }
            }
        case actionTypes.REMOVE_CURRENT_LIKES:
            let newLiked=curState.currentUser.liked_designs.filter((number)=>number!==action.unliked);
            return{
                ...curState,
                currentUser:{
                    ...curState.currentUser,
                    liked_designs:newLiked
                }
            }
        case actionTypes.UPDATE_LIKE:
        if (action.plusMinus==="+"){
            let newLikes = {
                ...curState.designs[action.index],
                likes: curState.designs[action.index].likes+1
            }
            let newDesigns = [...curState.designs];
            newDesigns.splice(action.index, 1, newLikes)
            return {
                ...curState,
                designs: newDesigns
            };
        }
        else if (action.plusMinus==="-"){
            let newLikes = {
                ...curState.designs[action.index],
                likes: curState.designs[action.index].likes-1
            }
            let newDesigns = [...curState.designs];
            newDesigns.splice(action.index, 1, newLikes)
            return {
                ...curState,
                designs: newDesigns
            };
        }
        default:
            return curState;
    }
}

export default reducer;