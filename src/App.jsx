/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import TaskField from './Components/TaskField'
import TaskList from './Components/TaskList'

function App() {

  let toDoListArray = [
  {id: 1, 
    item: "Wake up",
    completed: false 
  },
  {id: 2, 
  item: "exercise",
  completed: false 
  },
  {id: 3, 
  item: "drink cofee",
  completed: false 
  },
  ]


const [taskFieldValue, setTaskFieldValue] = useState("")
const [toDoList, setToDoList] = useState(toDoListArray)


function onChange(e){
  setTaskFieldValue(e.target.value)
}

function deleteTask(id){
  const updatedList = toDoList.filter(task => task.id !== id)
   const reindexedList = updatedList.map((task, index) => ({
    ...task, id: index+ 1
   }));
  setToDoList(reindexedList)
}


function displayListItems(){
  return toDoList.map(el => (
   <li className='task' key={el.id}>
     {el.id}. {el.item} <button className='btn'onClick={()=>deleteTask(el.id)}>❌</button>
     </li>
     )
 )}

function onSubmit(e){
  e.preventDefault()
  let newItem = {
    id: toDoList.length + 1,
    item: taskFieldValue,
    completed: false}
   setToDoList([...toDoList, newItem])
   console.log(toDoList)
   setTaskFieldValue("")
}


  return (
    <div className='body'>
    <Header className="header"/>
    <TaskField className="task-field" value={taskFieldValue} onChange={onChange} onSubmit={onSubmit}/>
    <TaskList toDoList={toDoList} displayListItems={displayListItems}/>
    </div>
  )
}

export default App
