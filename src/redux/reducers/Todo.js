import { v4 as uuidv4 } from 'uuid'


let ADD = 'ADD'
let DELETE = 'DELETE'



const initialState = {
    todos : [{
        id : 0,
        title : 'go to cinema',
        isChange : false
    }]
}

export default (state = initialState,action) => {
    switch (action.type){
        case ADD : {
            return {
                ...state,
                todos: [...state.todos,{
                    id : uuidv4(),
                    title : action.name,
                    isChange : false
                }]
            }
        } case DELETE : {
            return {
                ...state,
                todos: state.todos.filter((item)=>{
                    return item.id !== action.id
                })
            }
        }
        default : return state
    }
}


export const addItem = (title) => {
    return(dispatch) => {
        return dispatch({type : ADD,name : title})
    }
}

export const deleteTask = (id) => {
    return(dispatch) => {
        return dispatch({type:DELETE,id})
    }
}