import { todoList } from './index'

const handler = (req, res) => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'DELETE':
      try {
        const index = todoList.findIndex((task) => task.id === id)

        if (index === -1) throw new Error(404)

        todoList.splice(index, 1)
        res
          .status(200)
          .json({ success: true, data: `Task with ID:${id} removed 💥` })
      } catch (err) {
        res.status(404).json({ success: false, error: 'Not found 🙄' })
      }

      break
    case 'PUT':
      try {
        const todo = todoList.find((task) => task.id === id)

        if (!todo) throw new Error(404)
        if (todo.done) throw new Error(304)

        todo.done = true

        res
          .status(200)
          .json({ success: true, data: `Task with ID:${id} completed ✔️` })
      } catch (err) {
        res.status(err.message).json({ success: false, error: '🤬' })
      }
      break
    default:
      res.status(400).json({ success: false, error: 'Bad request 💀' })
  }
}

export default handler
