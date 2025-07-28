import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput('');
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="wrapper">
    <div className="app">
      <h1>📝 To-Do List</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Tambahkan tugas..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Tambah</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? 'done' : ''}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(index)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
