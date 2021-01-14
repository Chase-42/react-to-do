import React, { useState } from 'react'; // The hook of 'useState' is what React uses to hook into the state or lifecycle of the component.
import Todo from './components/Todo'; // Separate component that will handle displaying each Todo
import TodoForm from './components/TodoForm'; // Separate component that will handle displaying and input and passing up Todo to be kept in state.
import './App.css'; // Styling file

const App = () => {
	// The first parameter, 'todos', is what we are going to name our state.
	// The second parameter, 'setTodos', is what we are going to use to set the state.
	const [todos, setTodos] = useState([
		{ text: 'Learn about React', isCompleted: false },
		{ text: 'Meet friend for lunch', isCompleted: false },
		{ text: 'Build really cool todo app', isCompleted: false },
	]); // We are passing an array of objects as intial state

	// This function will be passed to TodoForm.js component and will be receiving text
	const addTodo = (text) => {
		// We create a new todos array and spread the old todos into it as well as the new todo
		const newTodos = [...todos, { text }];
		// We then call setTodos and update the state of App.js with newTodos which will contain old and new todos
		setTodos(newTodos);
	};

	// This function will be passed to the Todo.js component as props and will be receiving the index of the todo
	const completeTodo = (index) => {
		// we create a new array that has the old todos spread into it
		const newTodos = [...todos];
		// We set the newTodos at the index of whatever index is passed to the function and set it's 'isCompleted' state to true
		newTodos[index].isCompleted = true;
		// We then call setTodos and pass the updated 'newTodos' and update the App.js state.
		setTodos(newTodos);
	};

	// This function will also be passed to the Todo.js component as props and be receiving and index of the todo
	const removeTodo = (index) => {
		// we create a new array that has the old todos spread into it
		const newTodos = [...todos];
		// Then we will be splicing the chosen index off of the array of items.
		newTodos.splice(index, 1);
		// Once again, updating the state of App.js with new array of items.
		setTodos(newTodos);
	};

	return (
		<div className='app'>
			<div className='todo-list'>
				{/* Calling .map on the todos(state) array to create new array so we can display it to the DOM. */}
				{todos.map((todo, index) => (
					// Then we are returning the Todo component and passing it all the props it needs to display the todos.
					// As well as completeTodos and removeTodos functions which will be called within Todo.js via buttons.
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				))}
				{/* We are also returning(rendering) the TodoForm component to the DOM and passing it the addTodo function as props */}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};

export default App;
