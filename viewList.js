import React from 'react';

class ToDoAppList extends React.Component{
	constructor(){
		super();
	}

	render(){

		var item = this.props.task.map	((elem,i)=> {
			return <li key={i}>{elem}</li>
		});
		return (<div>
				<ul className="order">
					{item}
				</ul>
				</div>
			)
	}
}

export default ToDoAppList;