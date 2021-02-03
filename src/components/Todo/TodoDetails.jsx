import todoService from '../../api/todoService';
import MyLoader from '../utils/MyLoader';
import React, { useEffect, useState } from 'react';

const TodoDetails = (props) => {
	const [todoItem, setTodoItem] = useState({
		item: '',
		isLoading: true,
	});

	useEffect(() => {
		const fetchData = async () => {
			let theItem = await todoService.getTodoItem(props.id);
			setTodoItem({ item: theItem, isLoading: false });
		};
		fetchData();
		console.log('TodoDetails is rendered', props.id);
	}, [props.id]); /// useEffect is triggered when this value is changed

	function getNiceDateString(dateString) {
		let date = new Date(dateString);
		return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
	}

	return todoItem.isLoading ? (
		<MyLoader />
	) : (
		<div>
			<table className='table border table-bordered container'>
				<thead>
					<tr className='table-warning'>
						<th colSpan='2'>Read the todo description and do it</th>
					</tr>
				</thead>
				<tbody className='table-secondary'>
					<tr>
						<td>Title</td>
						<td>{todoItem.item.title}</td>
					</tr>
					<tr>
						<td>Description</td>
						<td>{todoItem.item.description}</td>
					</tr>
					<tr>
						<td>Deadline</td>
						<td>{getNiceDateString(todoItem.item.deadline)}</td>
					</tr>
					<tr>
						<td>Assignee</td>
						<td>
							{`${todoItem.item.assignee.firstName} ${todoItem.item.assignee.lastName}`}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TodoDetails;

// this is how a todo item is returned
// "id": "Example-TodoItem-2",
// "title": "Create More Assignments!",
// "description": "Spawn new ideas with teammates.",
// "deadline": "2020-01-02T08:00:00",
// "done": false,
// "assignee": {
//     "id": "Example-User-3",
//     "firstName": "Fredrik",
//     "lastName": "Odin"
// }
