import React, {useState} from 'react'
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import Header from './components/Header/Header'
import AddItem from "./components/addItem/addItem";
import BasicFolder from "./components/BasicFolder/BasicFolder";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import {changeTask} from "./redux/reducers/Todo";


function App() {

    const todo = useSelector((store)=> store.Todo.todos)
    const dispatch = useDispatch()

    const [popup,setPopup] = useState(false)
    const [title,setTitle] = useState('')
    const [all,setAll] = useState('all')



  return (
    <div className="App">
        <aside className="aside">
               <Header/>
            <div className="aside__myTask">
                    <BasicFolder/>
            </div>
            <AddItem title={title} setTitle={setTitle} popup={popup} setPopup={setPopup}/>
        </aside>
        <section className="allFolder">
                <div className="allFolder__title">
                    {todo.map((item)=>(
                       <div key={item.id}>
                           <h2 className="allFolder__title-impor">{item.title}</h2>
                           <ul className="allFolder__list">
                               {item.task.map((el)=>(
                                   <li className="allFolder__item" key={el.id}>
                                       <span onClick={()=> dispatch(changeTask(el.id))} className={`allFolder__item-checkbox ${el.isDone ? 'active' : ''}`}></span>
                                       {el.value}</li>
                               ))}
                           </ul>
                       </div>
                    ))}
                </div>
        </section>
    </div>
  );
}

//{/*   <span className="allFolder__icon" onClick={()=> dispatch(changeTask(item.id))}>*/}
//                         {/*/!*<FontAwesomeIcon icon={faArrowsRotate} />*!/*/}
//                         {/*</span>*/}

export default App;
