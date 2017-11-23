import React from 'react';
import AddNewTast from './addTask';
import ToDoAppList from './viewList';


class ToDo extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (<div>
				<h1>To Do List</h1>
				< AddNewTast task={this.props.task}/>
				<ToDoAppList task={this.props.task} />
				</div>
			);
	}
}

export default ToDo;