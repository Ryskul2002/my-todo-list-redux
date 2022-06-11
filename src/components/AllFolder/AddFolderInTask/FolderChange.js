import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate,faPenClip} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {changeDone, changeTask} from "../../../redux/reducers/Todo";

const FolderChange = ({item,setAll}) => {

    let dispatch = useDispatch()
    const [change,setChange] = useState('')

    return (
        <div className="task__titleChange">
            {item.isChange ?
                <>
                    <input defaultValue={item.title} type="text" className="task__input" onChange={(e)=> setChange(e.target.value)}/>
                    <span className="task__rotate" onClick={()=> {
                    dispatch(changeDone(change,item.id))
                        setAll(item.title)
                        setChange('')
                    }}><FontAwesomeIcon icon={faArrowsRotate}/></span>
                </>
                :
                <>
                    <h2 className="task__title">{item.title}</h2>
                    <span onClick={()=> dispatch(changeTask(item.id))} className="task__rotate"><FontAwesomeIcon icon={faPenClip}/></span>
                </>
            }
        </div>
    );
};

export default FolderChange