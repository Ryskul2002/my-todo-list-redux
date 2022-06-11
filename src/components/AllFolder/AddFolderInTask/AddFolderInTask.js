import React, {useState} from 'react';
import {useSelector} from "react-redux";
import FolderChange from "./FolderChange";
import FolderInTaskList from "./FolderInTaskList";
import AddFolderForm from "./AddFolderForm";


const AddFolderInTask = ({all, setAll}) => {

    const todo = useSelector((store) => store.Todo.todos)

    const [switches, setSwitches] = useState(false)
    const [input, setInput] = useState('')


    return (
        <div className="task">
            {todo.filter((rec) => rec.title === all).map((item) => (
                <div key={item.id} className="allFolder__tasks">
                    <FolderChange item={item} setAll={setAll}/>
                    <ul className="task__list">
                        {item.task.reduce((acc, rec) => acc + rec.input.length, 0) === 0
                            ? <p className="task__noTask">В этой папке отсутсвуют задачи</p>
                            : item.task.map((el) => (
                                <FolderInTaskList key={el.id} item={item} el={el}/>
                            ))
                        }
                        {!switches
                            ? <div className="task__addTask" onClick={() => setSwitches(true)}>
                            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
<path d="M8 1V15" stroke="#B4B4B4"/>
<path d="M1 8H15" stroke="#B4B4B4"/>
</svg></span>
                                <p className="task__addTask-newTask">Новая задача</p>
                            </div>
                            : <div className="task__add">
                                <AddFolderForm item={item} input={input} setInput={setInput} setSwitches={setSwitches}/>
                            </div>
                        }
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AddFolderInTask;