import React from 'react';
import '../App.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
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
