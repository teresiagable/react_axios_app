import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import todoService from '../api/todoService';
import TodoList from './Todo/TodoList';
import TodoDetails from './Todo/TodoDetails';
import TodoCreate from './Todo/TodoCreate';

class Home extends Component {
	state = {
		todos: [],
		loading: true,
		showCreate: false,
		showDetails: false,
		selectedId: '',
	};

	async componentDidMount() {
		let todolist = await todoService.getAll();
		console.log('componentDidMount');
		this.setState({
			todos: todolist,
			loading: false,
		});
	}

	openDetails = (id) => {
		console.log('openDetails', id);
		this.setState({ showCreate: false, showDetails: true, selectedId: id });
	};

	openCreate = () => {
		this.setState({ showCreate: true, showDetails: false, selectedId: '' });
	};
	saveNewTodo = async (props) => {
		console.log('in savenewTodo', props.item);
		let theNewItem = await todoService.createTodo(props.item);
		let todolist = await todoService.getAll();

		console.log('theResponse', theNewItem, props.item);
		this.setState({
			todos: todolist,
			showCreate: false,
			showDetails: true,
			selectedId: theNewItem.id,
		});
	};

	render() {
		//const {loading,showCreate,showDetails,selectedId}=this.state
		return this.state.loading ? (
			<div>
				<Loader
					style={{ 'text-align': 'center' }}
					type='Watch'
					color='#d33682'
					height={300}
					width={300}
				/>
			</div>
		) : (
			<div className='flex-container'>
				<div className='col'>
					<TodoList
						todolist={this.state.todos}
						todoClick={this.openDetails}
					/>
					<input
						type='button'
						className='btn btn-danger btn-m'
						value='Add something to do'
						onClick={this.openCreate}
					/>
				</div>
				{this.state.showDetails ? (
					<div className='col '>
						<TodoDetails id={this.state.selectedId} />
					</div>
				) : this.state.showCreate ? (
					<div className='col '>
						<TodoCreate onSubmit={this.saveNewTodo} />
					</div>
				) : (
					<div className='col'>
						<h3 className='text-success'>
							Willkommen! And bienvenue! Welcome!
						</h3>
					</div>
				)}
			</div>
		);
	}
}

export default Home;
