import React from 'react';

class AddNewTast extends React.Component {
	constructor(){
		super();
	}

	insert(e){
		e.preventDefault();
		var id  = document.getElementById("test");
		var value = id.value;
		var ul = document.getElementsByClassName("order")[0];
	    var li = document.createElement("li");
	    li.appendChild(document.createTextNode(value));
	    ul.appendChild(li)
	}	

	render(){
		return (
				<form>
					<input type="text" id='test'/>
					<br/>
					<button onClick={this.insert.bind(this)}>Submit</button>
				</form>
				
			);
	}
}

export default AddNewTast;