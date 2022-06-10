import {v4 as uuidv4} from 'uuid'


let ADD = 'ADD'
let DELETE = 'DELETE'
let ADDTASK = 'ADDTASK'
let DONE = 'DONE'
let DELETE_ITEM = 'DELETE_ITEM'
let CHANGE = 'CHANGE'

const initialState = {
    todos: [{
        id: 0,
        title: 'go to cinema',
        isChange: false,
        task: [{
                id : uuidv4(),
                value : 'after buy tickets',
                isDone : false
            },
            {
                id : uuidv4(),
                value : 'i want to go to cinema with girl',
                isDone : false
            }]
    },
        {
            id : 1,
            title : 'buy something',
            isChange: false,
            task: [{
                id : uuidv4(),
                value : '8555',
                isDone : false
            }]
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD : {
            return {
                ...state,
                todos: [...state.todos.filter((item)=> item.title === action.name ? alert('У вас уже есть такая задача') : item).filter((el)=> el.title.length === 10 ? alert('Вы можете добавить только 10 задач') : el),{
                    id : uuidv4(),
                    title : action.name,
                    isChange : false,
                    task : []
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
                    } else {
                        return null
                    }
                })
            }
        } case DONE : {
            return {
                ...state,
                todos: state.todos.map((item)=>{
                    if (item.id === action.itemID){
                        return {...item,task: item.task.map((el)=>{
                            if (el.id === action.id){
                                return {...el,isDone : !el.isDone}
                            } else {
                                return el
                            }
                            })
                        }
                    } else {
                        return item
                    }
                })
            }
        } case DELETE_ITEM : {
            return {
                ...state,
               todos: state.todos.map((item)=>{
                   if (item.id === action.deleteItemId){
                       return {...item,task : item.task.filter((el)=> el.id !== action.deleteId)}
                   } else {
                       return item
                   }
               })
            }
        } case CHANGE : {
            return {
                ...state,
                todos: state.todos.map((item)=>{
                    if (item.id === action.changeId){
                        return {...item,isChange : !item.isChange}
                    } else {
                        return item
                    }
                })
            }
        }
        default : return state
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

export const addTask = (values, id) => {
    return (dispatch) => {
        return dispatch({type: ADDTASK, values,id})
    }
}

export const doneTask = (id,itemID) =>{
    return(dispatch) => {
        return dispatch({type:DONE,id,itemID})
    }
}

export const deleteTaskItem = (id,itemId) => {
    return(dispatch) => {
        return dispatch({type:DELETE_ITEM,deleteId : id,deleteItemId : itemId})
    }
}

export const changeTask = (id) =>{
    return(dispatch) => {
        return dispatch({type:CHANGE,changeId : id})
    }
}