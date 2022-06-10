import React from 'react';
import {deleteTaskItem, doneTask} from "../../redux/reducers/Todo";
import {useDispatch, useSelector} from "react-redux";

const AllFolder = () => {

    const todo = useSelector((store)=> store.Todo.todos)
    const dispatch = useDispatch()

    return (
        <div className="allFolder__cards">
            {todo.reduce((acc,rec)=> acc + rec.title.length,0) === 0
                ? <h1 className="allFolder__noTask">Задачи отсутствуют</h1>
                : <>
                    {todo.map((item)=>(
                        <div key={item.id} className="allFolder__tasks">
                            <h1 className="allFolder__tasks-title">{item.title}</h1>
                            <ul className="allFolder__list">
                                {item.task.map((el)=>(
                                    <li key={el.id} className="allFolder__item">
                                        <span className={`allFolder__item-done ${el.isDone ? 'active' : ''}`} onClick={()=> dispatch(doneTask(el.id,item.id))}>{el.isDone ? <span>✔</span> : ''}</span>
                                        {el.value}
                                        <span className="allFolder__delete" onClick={()=>{
                                            dispatch(deleteTaskItem(el.id,item.id))
                                        }}>✘</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            }
        </div>
    );
};

export default AllFolder