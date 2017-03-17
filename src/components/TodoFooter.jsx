import React from 'react';
import _ from 'lodash';

export default class TodoFooter extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return(

				<footer style={{ display:this.props.todos.length>0?"block":"none" }}>
	
					<a id="clear-completed" style={this.props.style.footer}  onClick={this.props.clearTodoComplete.bind(this)} >Clear {this.props.todosCompleted} completed item</a>

					<div id="todo-count" >

					<b>{this.props.todos.length - this.props.todosCompleted}</b> item left</div>

				</footer>

		);
	}
}