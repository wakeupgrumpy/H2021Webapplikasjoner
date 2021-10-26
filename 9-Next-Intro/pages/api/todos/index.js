export const todoList = [
  {
    id: '1635196555987',
    task: 'Buy pineapple 🍍 for my pizza 🍕',
    done: false,
  },
  { id: '1635196583211', task: 'Buy a skarf for my 🦒', done: false },
]

const handler = (req, res) => {
  const { body: todo, method } = req

  switch (method) {
    case 'POST':
      todoList.push({ id: `${Date.now()}`, ...todo, done: false })
      res.status(201).json({ success: true, data: todoList })
      break
    case 'GET':
      res.status(200).json({ success: true, data: todoList })
      break
    default:
      res.status(400).json({ success: false, error: 'Bad request 💀' })
  }
}

export default handler
