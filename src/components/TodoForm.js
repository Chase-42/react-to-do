import React from 'react';
import '../App.css';

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = React.useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit} className='form'>
			<input
				type='text'
				className='input'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button id='form-button' className='button' onSubmit={handleSubmit}>
				Submit
			</button>
		</form>
	);
};

export default TodoForm;
