import { TaskContext } from '../Context/Context';
import './Input.scss';
import React, { useContext, useState } from 'react';

const Input = () => {

  const { addTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');
  
  const handleAddTask = () => {
    const task = {text: newTask, id: Date.now(), completed: false}
    addTask(task);
    setNewTask('')
  }

  return (
    <div className='input'>
      <div className="form">
        <input 
        type="text" 
        value={newTask}
        onChange={(e)=> setNewTask(e.target.value)}
        id='input-task' 
        placeholder='Input Your Task'
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  )
}

export default Input
