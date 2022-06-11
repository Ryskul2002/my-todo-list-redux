import React from 'react';
import {deleteTaskItem, doneTask} from "../../../redux/reducers/Todo";
import {useDispatch} from "react-redux";

const FolderInTaskList = ({item, el}) => {

    const dispatch = useDispatch()

    return (
            <li className="task__item" key={el.id}>
            <span onClick={() => dispatch(doneTask(el.id, item.id))}
                  className={`task__item-done ${el.isDone ? 'active' : ''}`}>{el.isDone ? <span>✔</span> : ''}</span>
                <p className={`task__item-title ${el.isDone ? 'active' : ''}`}>{el.input}</p>
                <span className="task__item-delete" onClick={() => dispatch(deleteTaskItem(el.id, item.id))}>✘</span>
            </li>
    );
};

export default FolderInTaskList;