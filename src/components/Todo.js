import React from 'react';
import '../App.css';

// This component focuses on displaying each Todo as well as the ability to show it is completed and remove it from the list.
const Todo = ({ todo, index, completeTodo, removeTodo }) => {
	// Destructuring what we need out of props (what is being passed from App.js)
	// The Todo is the string we want to display, index helps JS know which todo it is dealing with.
	// completeTodo and removeTodo are functions from App.js that we call in Todo.js that perform a task on a todo.
	return (
		<div
			className='todo'
			style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
		>
			{todo.text}
			<div className='buttons-div'>
				<button className='button' onClick={() => completeTodo(index)}>
					Complete
				</button>
				<button className='button' onClick={() => removeTodo(index)}>
					x
				</button>
			</div>
		</div>
	);
};

export default Todo;
// Export default allows us to use the "import x from 'module'" statement in App.js. You can only have on default export.
