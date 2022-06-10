import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import FolderChange from "./FolderChange";
import {deleteTaskItem, doneTask} from "../../redux/reducers/Todo";


const AddFolderInTask = ({all}) => {

    const todo = useSelector((store)=> store.Todo.todos)
    const dispatch = useDispatch()

    return (
        <div className="task">
            {todo.filter((rec)=> rec.title === all).map((item)=>(
                <div key={item.id} className="allFolder__tasks">
                    <FolderChange item={item}/>
                    <ul className="task__list">
                        {item.task.map((el)=>(
                            <li className="task__item" key={el.id}>
                                <span onClick={()=> dispatch(doneTask(el.id,item.id))} className={`task__item-done ${el.isDone ? 'active' : ''}`}>{el.isDone ? <span>✔</span> : ''}</span>
                                <p className={`task__item-title ${el.isDone ? 'active' : ''}`}>{el.value}</p>
                                <span className="task__item-delete" onClick={()=> dispatch(deleteTaskItem(el.id,item.id))}>✘</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AddFolderInTask;