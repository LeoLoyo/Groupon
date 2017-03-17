import React from 'react';
import _ from 'lodash';
import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.Component{
	constructor(props){
		super(props);
	}

	createItems(){

		const props = _.omit(this.props, 'todos');
	
        return _.map(this.props.todos, (todo, index) => { 
        	
        	return <TodoItem key={index} {...todo} {...props} />
        });
	}
	render(){

		return(

			<div>
				<ul id="todo-list">{this.createItems()}</ul>
			</div>
	
		);
	
	}

}

