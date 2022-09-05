import { tasks as data } from '../constants/task'
import { createContext, useState, useEffect } from "react"

export const TaskContext = createContext() //El nombre del contexto

export function TaskContextProvider(props) { //el componente que va a englobar a todos 

  const [tasks, setTasks] = useState([])

  const createTask = (taskTitle, taskDescription) => {
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: taskDescription
    }])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => id !== task.id))
  }

  useEffect(() => {
    setTasks(data)
  }, [])

  {/*el componente*/ }
  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask,
    }}>{props.children}
    </TaskContext.Provider>
  )
}

