import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import CreateTodo from './CreateTodo.jsx';
import TodoList from './TodoList.jsx';
import TodoFooter from './TodoFooter.jsx';

const todos = [{name:"Salir a Caminar",complete:false},{name:"Comprar Comida",complete:true}];

export default class Todo extends React.Component {
	
	constructor(){
		super();
		
		this.state = {
			todos
		}

	}
	createTodo(todoToCreate){
		this.state.todos.push({

			name :todoToCreate,

			complete: false

        });

        this.setState({ todos: this.state.todos });
	}

	editTodo(nameViejo, todoToEdit){
		
		const todofound = _.find(this.state.todos, todo => todo.name === nameViejo);
	
		todofound.name = todoToEdit;
	
		this.setState({ todos: this.state.todos });
	}

	completeTodo(todoComplete){

		const todofound = _.find(this.state.todos, todo => todo.name === todoComplete);
	
		todofound.complete = !todofound.complete;
	
		this.setState({ todos: this.state.todos });
	}

	deleteTodo(todoToDelete){

		_.remove(this.state.todos, todo => todo.name === todoToDelete);
        
        this.setState({ todos: this.state.todos });
	}

	clearTodoComplete() {

		_.remove(this.state.todos, todo => todo.complete === true);

        this.setState({ todos: this.state.todos });
    }

    handleInput(event){
	    const state = Object.assign({},this.state)
	    
	    if(event.target.type === 'checkbox'){
	    	_.map(state.todos, (todo)=>{ todo.complete = event.target.checked;})
			this.setState(state);
	    }
	}

	render() {
		let todosCompleted = 0;

		todosCompleted = _.filter(this.state.todos,  (todo) => {return todo.complete === true}).length;

		let style = {
			todos:{
		
		        display:this.state.todos.length>0?"block":"none"      
		
		      },
		
			footer:{
		
				display:todosCompleted>0?"block":"none"
			}
	
		};
		
		return (

			<div id="todoapp">

				<CreateTodo 
					createTodo={this.createTodo.bind(this)} 
					todos={this.state.todos} />	

				<section id="main" style={style.todos}>
			
					<input id="toggle-all" type="checkbox" onChange={this.handleInput.bind(this)}/>
			
					<label>Mark all as complete</label>
					
					<TodoList 
						todos={this.state.todos} 
						editTodo={this.editTodo.bind(this)}
						completeTodo={this.completeTodo.bind(this)}
						deleteTodo={this.deleteTodo.bind(this)}/>

				</section>

				<TodoFooter 
					todos={this.state.todos} 
					style={style} 
					todosCompleted={todosCompleted}
					clearTodoComplete={this.clearTodoComplete.bind(this)}/>

			</div>

		);
	
	}

};