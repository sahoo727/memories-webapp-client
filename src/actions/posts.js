import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE, COMMENT, FETCH_BY_SEARCH, START_LOADING, END_LOADING} from '../constants/actionTypes';
import * as api from '../api';

//action creators
export const getPosts = (page) => async(dispatch) => {                         //redux thunk allows to add another function - here a function is returning a function
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPosts(page);                    // {data} contains the data component of response
        console.log(data)
        dispatch({type: FETCH_ALL, payload: data});                //the syntax of this is given below
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message)
    }
    // const action = {type : 'FETCH_ALL', payload : []}
    // dispatch(action);                                               // here instead of returning action we dispatch it
}

export const getPost = (id) => async(dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPost(id);                    
        console.log(data);
        dispatch({type: FETCH_POST, payload: data});         
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message)
    }                                            
}

export const getPostsBySearch = (searchQuery) => async(dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data: {data} } = await api.fetchPostsBySearch(searchQuery)
        dispatch({type: FETCH_BY_SEARCH, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post, history) => async(dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const  {data} = await api.createPost(post);
        history(`/posts/${data._id}`);

        dispatch({ type:CREATE, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({type:UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type:DELETE, payload:id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({type:UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const commentPost = (value, id) => async(dispatch) => {
    try {
        const {data} = await api.comment(value, id);
        dispatch({type: COMMENT, payload: data})
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}