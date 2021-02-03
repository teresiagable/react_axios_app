import React from 'react';

function TodoItem(props) {
	let todo = props.todo;
	let date = new Date(todo.deadline);
	let ret =
		todo == null ? null : (
			<tr className='table-secondary'>
				<td>
					{date.toLocaleDateString()} {date.toLocaleTimeString()}
				</td>
				<td>{todo.title}</td>
				{/* <td>{todo.description}</td> */}
				<td>{`${todo.assignee.firstName} ${todo.assignee.lastName}`}</td>
				<td>
					<input
						type='button'
						className='btn btn-warning btn-sm'
						value='Show details'
						onClick={() => props.itemClick(todo.id)}
					/>
				</td>
			</tr>
		);
	return ret;
}

export default TodoItem;
