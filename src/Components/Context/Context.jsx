import React, { createContext, useState } from 'react';

const TaskContext = createContext();

const TaskProvider = ({children}) => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks,task]);

  const deleteTask = (taskId) => setTasks(tasks.filter(task => task.id !== taskId));
  // console.log(tasks)

  const completedTask = (taskId) => setTasks(tasks.map((task)=> taskId === task.id? {...task, completed: !task.completed} : task));
  return (
    <TaskContext.Provider value={{tasks, addTask, deleteTask, completedTask}}>
      {children}
    </TaskContext.Provider>

  )
}

export {TaskProvider,TaskContext}
