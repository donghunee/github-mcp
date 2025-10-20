import { useState } from 'react'
import './App.css'
import TodoFilter from './components/TodoFilter'
import { Todo, FilterType } from './types/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: true },
    { id: 3, text: 'Add Filter Feature', completed: false },
  ])
  const [filter, setFilter] = useState<FilterType>('all')
  const [inputText, setInputText] = useState('')

  // 필터링된 Todo 목록
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true // 'all'
  })

  // Todo 추가
  const handleAddTodo = () => {
    if (inputText.trim() === '') return
    
    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setInputText('')
  }

  // Todo 완료 상태 토글
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Todo 삭제
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="app-container">
      <h1>📝 Todo App</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">
          Add
        </button>
      </div>

      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p className="empty-message">No todos to display</p>
        ) : (
          filteredTodos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span
                className={`todo-text ${todo.completed ? 'completed' : ''}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="delete-button"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <div className="stats">
        <span>
          {todos.filter((t) => !t.completed).length} items left
        </span>
      </div>
    </div>
  )
}

export default App
