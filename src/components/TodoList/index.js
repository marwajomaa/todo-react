import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';



class TodoList extends Component {

  state={
  items: [],
   todo: ''
  };

  handleChange=(e)=>{
    this.setState({ todo: e.target.value });
    console.log(e.target.value );
  }

handleSubmit=(e)=>{
  e.preventDefault();
  if(!this.state.todo.length){
    return;
  }

 this.setState(prevState=>({
   items:prevState.items.concat({todo:this.state.todo}),
 }));
 console.log(this.state);
}

  render() {
    return (
      <div className="TodoListDiv">


        <form onSubmit={this.handleSubmit}>
          <input  id="new-todo"  onChange={this.handleChange}  value={this.state.todo}  />
          <button>Add #{this.state.items.length+1} </button>
        </form>


      </div>
    );
  }


}

export default TodoList;
