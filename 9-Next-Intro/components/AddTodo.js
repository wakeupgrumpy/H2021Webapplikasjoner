import { useContext, useState } from 'react'

import { TodoContext } from '../context/TodoContext'

const AddTodo = () => {
  const [task, setTask] = useState('')
  const { post } = useContext(TodoContext)

  const addTodoClick = (event) => {
    event.preventDefault()
    post(task)
    setTask('')
  }

  const inputHandler = (event) => setTask(event.target.value)
  const inputIsEmpty = task.length === 0

  return (
    <form className="wrapper">
      <input
        type="text"
        placeholder="What todo?"
        value={task}
        onChange={inputHandler}
      />
      <button
        role="button"
        type="submit"
        onClick={addTodoClick}
        disabled={inputIsEmpty}
        className="button-blue"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
