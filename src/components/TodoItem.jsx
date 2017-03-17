import React from 'react'

export default class TodoItem extends React.Component {
	constructor(props){
	
    	super(props)
    
        this.state = { edit:false, mouseEnter:false };
	
    }
    
    handleItem(e){

        if(e.target.name==='name') this.props.editTodo(this.props.name,e.target.value);

    }

    onMouseEnterHandler(e){
        this.state.mouseEnter = true;
        this.setState(this.state);
    }
    onMouseLeaveHandler(e){
        this.state.mouseEnter = false;
        this.setState(this.state);
    }

    editItem(){
        this.state.edit = !this.state.edit;
        this.setState(this.state);

    }
    handleBlur(e){
        this.state.edit = false;
        this.setState(this.state);
    }
    
    render(){
        const { name, complete } = this.props;
        return(
            <li className={this.props.complete===true?"done":''} onMouseEnter={this.onMouseEnterHandler.bind(this)}
                onMouseLeave={this.onMouseLeaveHandler.bind(this)} >
                
                <div className="view" style={{display:this.state.edit==true?"none":"block"}}>
                
                    <input name="complete" className="toggle" type="checkbox" onChange={this.handleItem.bind(this)} onClick={this.props.completeTodo.bind(this, name)} checked={this.props.complete} />

                    <label onDoubleClick={this.editItem.bind(this)}>{this.props.name}</label>
                    
                    <a className="destroy" style={{display:this.state.mouseEnter===true?"block":"none"}} onClick={this.props.deleteTodo.bind(this, this.props.name)}></a>

                </div>
                
                <input 
                    name="name" className="edit"  
                    type="text" value={this.props.name}
                    style={{display:this.state.edit==true?"block":"none"}} 
                    onChange={this.handleItem.bind(this)}
                    onBlur={this.handleBlur.bind(this)} />
            
            </li>
        
        );
    }

}