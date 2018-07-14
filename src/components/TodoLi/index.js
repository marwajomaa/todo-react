import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class TodoLi extends Component{
  render(){
    return(
      <ul>
      {this.props.items.map(item=>(<li key={item}>{item}</li>))}
      </ul>

    );
  }
}

export default TodoLi;
