import React from 'react'
import TodoItem from './TodoItem.jsx';

export default class CreateTodo extends React.Component {
	constructor(props){

		super(props)
        
        this.state = {
        
            newTask:""
        }
	
    }

    handleInput(event){


        const state = Object.assign({},this.state)
        
        state[event.target.name] = event.target.value; 
        
        
        this.setState(state);

    }

    CreateTodoItem(event) {

        if(event.key == 'Enter' && event.target.value!==""){
            const name = event.target.value
            this.props.createTodo(name)

            this.setState({newTask:""}); 
        
        }
        
    }

	render(){

		return(	
			
			<div>	

				<header>
			
            		<h1>Todos</h1>
 
                    <input id="newTask" type="text" placeholder="What needs to be done?" name="newTask"  onKeyPress={this.CreateTodoItem.bind(this)} onChange={this.handleInput.bind(this)} value={this.state.newTask} autoFocus={true}/>

				</header>

     
			</div>

		);

	}

}