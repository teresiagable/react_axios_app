import axios from 'axios';
class todoService {
	async getAll() {
		return await axios
			.get('https://nameless-sea-91978.herokuapp.com/api/todoItem')
			.then((response) => {
				console.log(response);
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async getTodoItem(id) {
		return await axios
			.get(
				'https://nameless-sea-91978.herokuapp.com/api/todoItem?type=id&value=' +
					id
			)
			.then((response) => {
				console.log(response);
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async getAllUsers() {
		return await axios
			.get('https://nameless-sea-91978.herokuapp.com/api/appUser')
			.then((response) => {
				console.log(response);
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async createTodo(todoData) {
		console.log('todoData', todoData);
		var data = JSON.stringify(todoData);

		var config = {
			method: 'post',
			url: 'https://nameless-sea-91978.herokuapp.com/api/todoItem',
			// headers: {
			// 	'Content-Type': 'application/json',
			// },
			data: data,
		};
		console.log('config', config);
		return await axios(config)
			.then((response) => {
				console.log(response);
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export default new todoService();
