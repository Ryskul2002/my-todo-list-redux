import React from 'react';
import {deleteTask} from "../../redux/reducers/Todo";
import {useDispatch, useSelector} from "react-redux";

const TodoList = ({setAll}) => {

    const todo = useSelector((store)=> store.Todo.todos)
    const dispatch = useDispatch()


    return (
        <div>
            <ul className="aside__list">
                {todo.map((item)=>(
                    <li onClick={()=> setAll(item.title)} className="aside__item" key={item.id}>{item.title}
                        <button className="aside__myTask-btn" type="button" onClick={()=> dispatch(deleteTask(item.id))}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;