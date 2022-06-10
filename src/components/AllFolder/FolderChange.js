import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate,faPenClip} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {changeTask} from "../../redux/reducers/Todo";

const FolderChange = ({item}) => {

    let dispatch = useDispatch()

    return (
        <div className="task__titleChange">
            {item.isChange ?
                <>
                    <input type="text" className="task__input"/>
                    <span className="task__rotate"><FontAwesomeIcon icon={faArrowsRotate}/></span>
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

export default FolderChange;