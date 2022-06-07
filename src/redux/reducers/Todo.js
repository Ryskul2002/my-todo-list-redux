import {v4 as uuidv4} from 'uuid'


let ADD = 'ADD'
let DELETE = 'DELETE'
let ADDTASK = 'ADDTASK'
let CHANGE = 'CHANGE'


const initialState = {
    todos: [{
        id: 0,
        title: 'go to cinema',
        isChange: false,
        task: [{
                id: uuidv4(),
                value: 'after buy tickets',
                isChange: false
            },
            {
                id : uuidv4(),
                value : 'i want to go to cinema with girl',
                isChange : false
            }
        ]
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD : {
            return {
                ...state,
                todos: [...state.todos, {
                    id: uuidv4(),
                    title: action.name,
                    isChange: false,
                    task: []
                }]
            }
        }
        case DELETE : {
            return {
                ...state,
                todos: state.todos.filter((item) => {
                    return item.id !== action.id
                })
            }
        }
        case ADDTASK : {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item, task: [...item.task, {
                                id: uuidv4(),
                                value : action.values,
                                isDone : false,
                            }]
                        }
                    }
                })
            }
        } case CHANGE : {
            return {
                ...state,
                todos: state.todos.map((item)=>{
                    if (item.id === action.id){
                        return item.task.map((el)=>{
                            if (el.id === action.id){
                                return {...el,isDone : !el.isDone}
                            } else {
                                return el
                            }
                        })
                    } else {
                        return item
                    }
                })
            }
        }
        default :
            return state
    }
}


export const addItem = (title) => {
    return (dispatch) => {
        return dispatch({type: ADD, name: title})
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        return dispatch({type: DELETE, id})
    }
}

export const changeTask = (id) => {
    return(dispatch) => {
        return dispatch({type:CHANGE,id})
    }
}

export const addTask = (values, id) => {
    return (dispatch) => {
        return dispatch({type: ADDTASK, values,id})
    }
}