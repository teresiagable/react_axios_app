let theData = [
	{
		id: 'Example-TodoItem-1',
		title: 'Finish Assignment!',
		description: 'The assignment is to create TodoItems.',
		deadline: '2020-01-01T17:00:00',
		done: false,
		assignee: {
			id: 'Example-User-1',
			firstName: 'Simon',
			lastName: 'Elbrink',
		},
	},
	{
		id: 'Example-TodoItem-2',
		title: 'Create More Assignments!',
		description: 'Spawn new ideas with teammates.',
		deadline: '2020-01-02T08:00:00',
		done: false,
		assignee: {
			id: 'Example-User-3',
			firstName: 'Fredrik',
			lastName: 'Odin',
		},
	},
	{
		id: 'Example-TodoItem-3',
		title: 'Create More Exercises!',
		description: 'Spawn new ideas with teammates.',
		deadline: '2020-01-03T08:00:00',
		done: false,
		assignee: {
			id: 'Example-User-3',
			firstName: 'Fredrik',
			lastName: 'Odin',
		},
	},
];

const theUsers = [
	{
		id: 'Example-User-1',
		firstName: 'Simon',
		lastName: 'Elbrink',
	},
	{
		id: 'Example-User-2',
		firstName: 'Ulf',
		lastName: 'Bengtsson',
	},
	{
		id: 'Example-User-3',
		firstName: 'Fredrik',
		lastName: 'Odin',
	},
	{
		id: 'Example-User-4',
		firstName: 'Mehrdad',
		lastName: 'Javan',
	},
	{
		id: 'Example-User-5',
		firstName: 'Teresia',
		lastName: 'Gable',
	},
];
class todoService {
	async getAll() {
		return theData;
	}
	async getTodoItem(id) {
		return theData.find((item) => item.id === id);
	}

	async getAllUsers() {
		return theUsers;
	}

	async createTodo(todoData) {
		let theTodoUser = theUsers.find((user) => user.id === todoData.assignee);
		let theTodo = { ...todoData, id: Date.now(), assignee: theTodoUser };
		theData.push(theTodo);
		return theTodo;
	}
}

export default new todoService();
