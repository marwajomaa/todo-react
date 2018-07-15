import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class TodoLi extends Component {
  render(){
    console.log(this.props.items);
    return(
      <ul>
      {this.props.items.map(item => (<li key={item.id}>{item.todo}</li>))}
      </ul>
    );
  }
}

export default TodoLi;
