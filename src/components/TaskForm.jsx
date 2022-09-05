import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContextProvider'

function TaskForm({ }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    title === '' ? alert('Escribe un titulo') : createTask(title, description)
    setTitle('')
    setDescription('')
    focusInput()
  }

  function focusInput() {
    document.getElementById("myText").focus();
  }

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-2xl font-bold text-white mb-3'>Crear tarea</h1>
      <form onSubmit={handleSubmit} className='bg-slate-400 p-10 mb-4'>
        <input
          className='bg-slate-300 p-3 w-full mb-2'
          id='myText'
          type="text"
          placeholder="Agregar titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <br />
        <textarea
          className='bg-slate-300 p-3 w-full mb-2'
          type="text"
          placeholder="Agregar descipcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br />
        <button className='bg-indigo-500 px-3 py-2 text-white'>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm