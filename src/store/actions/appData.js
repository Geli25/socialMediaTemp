import * as actionTypes from './actionTypes';

export const updateDesigns = (designs) => ({
    type: actionTypes.UPDATE_DESIGNS,
    designs: designs
})

export const updateUsers = (users) => ({
    type: actionTypes.UPDATE_USERS,
    users: users
})

export const updateCurrentUser = (currentUser) => ({
    type: actionTypes.UPDATE_CURRENT_USER,
    currentUser: currentUser
})

export const updateLikes=(type,index)=>({
    type:actionTypes.UPDATE_LIKE,
    plusMinus:type,
    index:index
})

export const addCurrentLikes = (liked) => ({
    type: actionTypes.ADD_CURRENT_LIKES,
    liked: liked
})

export const removeCurrentLikes=(unliked)=>({
    type:actionTypes.REMOVE_CURRENT_LIKES,
    unliked:unliked
})