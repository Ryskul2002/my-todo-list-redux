import React from 'react';
import {useSelector} from "react-redux";
import AllFolderList from "./AllFolderList";

const AllFolder = () => {

    const todo = useSelector((store)=> store.Todo.todos)

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
                                    <AllFolderList key={el.id} item={item} el={el}/>
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