import React from 'react';
import {deleteTaskItem, doneTask} from "../../redux/reducers/Todo";
import {useDispatch} from "react-redux";

const AllFolderList = ({item,el}) => {

    const dispatch = useDispatch()

    return (
        <li className="allFolder__item">
            <span className={`allFolder__item-done ${el.isDone ? 'active' : ''}`} onClick={()=> dispatch(doneTask(el.id,item.id))}>{el.isDone ? <span>✔</span> : ''}</span>
            <p className={`allFolder__item-title ${el.isDone ? 'active' : ''}`}>{el.input}</p>
            <span className="allFolder__delete" onClick={()=>{
                dispatch(deleteTaskItem(el.id,item.id))
            }}>✘</span>
        </li>
    );
};

export default AllFolderList;