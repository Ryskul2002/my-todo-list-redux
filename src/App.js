import React, {useState} from 'react'
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import Header from './components/Header/Header'
import {addItem} from "./redux/reducers/Todo";
import BasicFolder from "./components/BasicFolder/BasicFolder";

function App() {

    const todo = useSelector((store)=> store.Todo.todos)
    const dispatch = useDispatch()

    const [popup,setPopup] = useState(false)
    const [title,setTitle] = useState('')


  return (
    <div className="App">
        <aside className="aside">
               <Header/>
            <div className="aside__myTask">
                    <BasicFolder/>
            </div>
            <addItem
            />
        </aside>
    </div>
  );
}

export default App;
