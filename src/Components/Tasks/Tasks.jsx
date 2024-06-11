import './Tasks.scss';
import {assets} from '../../assets/assets';
import React, { useContext } from 'react'
import { TaskContext } from '../Context/Context';

const Tasks = () => {

  const {tasks, deleteTask, completedTask} = useContext(TaskContext);

  return (
    <>
    <div className='tasks'>
      <h2>Your Tasks</h2>
      <div id='lists-container'>
        <ul id='lists-box'>
          {tasks.map((task) =>(
            <li key={task.id} className='fade-in item-box'>
              <p onClick={()=> completedTask(task.id)} className={task.completed? 'done' : ''}>{task.text}</p>
              <div onClick={()=>deleteTask(task.id)} className='delete'>
                <img className='delete-icon' src={assets.delete_icon} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Tasks
