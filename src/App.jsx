import { useState } from 'react';
import './App.css';
function App() {
	const [todos, setTodos] = useState(
		{ id: 1, title: 'Make a react project' },
		{ id: 2, title: 'Record a coding video' }
	);
	const [input, setInput] = useState('');
	const addTodo = (e) => {
		e.preventDefault();
		setTodos([...todos, input]);
		setInput('');
	};
	return (
		<div className="App">
			<h1>TODO React Firebase</h1>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					type="submit"
					onClick={addTodo}
				>
					Add Todo
				</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo}</li>
				))}
			</ul>
		</div>
	);
}
export default App;
