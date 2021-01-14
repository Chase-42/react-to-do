import React, { useState } from 'react'; // Once more we are using the useState hook
import '../App.css';

const TodoForm = ({ addTodo }) => {
	// We are destructuring the 'addTodo' function from props to use in our handleSubmit function.
	// In this component we are starting with an empty state for the input field.
	// Make it able to update the form by settting the state.
	// Handle the submit
	const [value, setValue] = useState('');

	// This function will be called when the form or button is submitted.
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		// Calls addTodo function and passes up the state that was set in the input
		addTodo(value);
		// Set this component's state back to an empty string
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit} className='form'>
			<input
				type='text'
				className='input'
				value={value}
				onChange={(e) => setValue(e.target.value)} // Onchange will call setValue and set it to this component's state.
			/>
			<button id='form-button' className='button' onSubmit={handleSubmit}>
				Submit
			</button>
		</form>
	);
};

export default TodoForm;
