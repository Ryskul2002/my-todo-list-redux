import React, {useState} from 'react'
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import Header from './components/Header/Header'
import AddTask from "./components/AddTask/AddTask";
import TodoList from "./components/TodoList/TodoList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import {deleteTaskItem, doneTask} from "./redux/reducers/Todo";
import AllFolder from "./components/AllFolder/AllFolder";
import AddFolderInTask from "./components/AllFolder/AddFolderInTask";



function App() {

    const todo = useSelector((store)=> store.Todo.todos)
    const dispatch = useDispatch()

    const [popup,setPopup] = useState(false)
    const [title,setTitle] = useState('')
    const [all,setAll] = useState('all')



  return (
    <div className="App">
        <aside className="aside">
               <Header setAll={setAll}/>
            <div className="aside__myTask">
                    <TodoList setAll={setAll}/>
            </div>
            <AddTask title={title} setTitle={setTitle} popup={popup} setPopup={setPopup}/>
        </aside>
        <section className="allFolder">
            {all === 'all'
                ? <AllFolder/>
                : <AddFolderInTask all={all} setAll={setAll}/>
            }
        </section>
    </div>
  );
}


export default App;
