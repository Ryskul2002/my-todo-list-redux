import React from 'react';
import {addTask} from "../../../redux/reducers/Todo";
import {useDispatch} from "react-redux";

const AddFolderForm = ({item,input,setInput,setSwitches}) => {

    const dispatch = useDispatch()

    return (
        <form action="" onSubmit={(e)=> {
            e.preventDefault()
            dispatch(addTask(input,item.id))
            setInput('')
        }}>
            <input required minLength="2" value={input} type="text" className="task__add-input" placeholder="Текст задачи" onChange={(e)=> setInput(e.target.value)}/>
            <div className="task__add-btns">
                <button className="task__add-task" type="submit">Добавить задачу</button>
                <button className="task__add-cancellation" type="button" onClick={()=> setSwitches(false)}>Отмена</button>
            </div>
        </form>
    );
};

export default AddFolderForm;