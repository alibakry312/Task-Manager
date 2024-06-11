import './Tasks.scss';
import {assets} from '../../assets/assets';
import React, { useContext } from 'react'
import { TaskContext } from '../Context/Context';

const Tasks = () => {

  const {tasks, deleteTask, completedTask} = useContext(TaskContext);
  const date = new Date();

  return (
    <>
    <div className='tasks'>
      <h2>Your Tasks</h2>
      <div id='lists-container'>
        <ul id='lists-box'>
          {tasks.map((task) =>(
            <li key={task.id} className='fade-in item-box'>
              <p className={task.completed? 'done' : ''}>{task.text}</p>
              <div className="actions">

                <div className="task-info">
                  <span className='time'>{`${date.getHours()}:${date.getMinutes()}`}</span>
                  <span className='priority'>Priority</span>
                </div>
                
                <div className='task-btns'>
                  <button onClick={()=> completedTask(task.id)} className='done-btn'>Done</button>
                  <button onClick={()=> deleteTask(task.id)} className='delete'>Delete</button>
                </div>
              </div>
              {/* <div onClick={()=>deleteTask(task.id)} className='delete'>
                <img className='delete-icon' src={assets.delete_icon} alt="" />
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Tasks
