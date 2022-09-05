import TaskCard from "./TaskCard"
import { TaskContext } from '../context/TaskContextProvider'
import { useContext } from "react"

function TaskList() {

  const { tasks } = useContext(TaskContext)
  if (tasks.length === 0) return <div className="text-white text-4xl font-bold text-center">Aun no hay tareas</div>

  return (
    <div className="grid grid-cols-2 gap-2">
      {
        tasks.map(task => <TaskCard task={task} key={task.id} />)
      }
    </div>
  )
}

export default TaskList