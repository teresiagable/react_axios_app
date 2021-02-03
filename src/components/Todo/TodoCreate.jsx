import React, { useState, useEffect } from 'react';
import todoService from '../../api/todoService';

const TodoCreate = (props) => {
	const [todoItem, setTodoItem] = useState({
		title: '',
		description: '',
		deadline: '2020-01-02T07:00:00',
		done: false,
		assignee: '',
	});
	const [todoUsers, setUsers] = useState({
		users: [],
		isLoading: true,
	});

	useEffect(() => {
		const fetchData = async () => {
			let theUsers = await todoService.getAllUsers();
			setUsers({ users: theUsers, isLoading: false });
			console.log('component TodoCreate rerendered');
		};
		fetchData();
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		//console.log('submit todoitem', todoItem);
		let itemObject = { item: todoItem };
		props.onSubmit(itemObject);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setTodoItem({ ...todoItem, [name]: value });
		//console.log('event', event.target);
	};

	function getTDateString(dateString) {
		let date = new Date(dateString);
		return date.toLocaleDateString() + 'T' + date.toLocaleTimeString();
	}

	const handleDeadLineChange = (event) => {
		const { name, value } = event.target;
		setTodoItem({ ...todoItem, [name]: getTDateString(value) });
		//console.log('eventdate', getTDateString(value));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<table className='table border table-bordered container'>
					<thead>
						<tr className='table-danger'>
							<th colSpan='2'>Create something new to do</th>
						</tr>
					</thead>
					<tbody className='table-secondary'>
						<tr>
							<td>Title</td>
							<td>
								<input
									type='text'
									name='title'
									value={todoItem.title}
									onChange={handleChange}
								></input>
							</td>
						</tr>
						<tr>
							<td>Description</td>
							<td>
								<input
									type='text'
									name='description'
									value={todoItem.description}
									onChange={handleChange}
								></input>
							</td>
						</tr>
						<tr>
							<td>Deadline</td>
							<td>
								<input
									type='date'
									name='deadline'
									value={new Date(
										todoItem.deadline
									).toLocaleDateString()}
									onChange={handleDeadLineChange}
								></input>
							</td>
						</tr>
						<tr>
							<td>Assignee</td>
							<td>
								<select
									name='assignee'
									// value={todoUsers.users[1].id}
									onChange={handleChange}
								>
									{todoUsers.users.map((user, index) => (
										<option
											key={user.id}
											// selected={index === 1} ///OMG this is ugly
											value={user.id}
										>
											{user.firstName + ' ' + user.lastName}
										</option>
									))}
								</select>
							</td>
						</tr>
						<tr>
							<td colSpan='2'>
								<input
									type='submit'
									value='Save'
									className='btn btn-danger btn-m float-right'
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	);
};

export default TodoCreate;
// example of how a new todo item looks like
// {
//     "title": "Eat even more Breakfast",
//     "description": "You now how to eat you dont need a description...",
//     "deadline": "2020-01-02T07:00:00",
//     "done": false,
//     "assignee":"Example-User-1"
// }
// const emptyTodo = {
//     title: '',
//     description: '',
//     deadline: '',
//     done: false,
//     assignee: '',
//   };
