import './App.css';
import ButtonColumn from './ButtonColumn';
import {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {lastNum: null};
  }

  handleClick = (num) => this.setState({lastNum: num});

  render(){
    return (
      <div class="container text-center">
        <div class='row'>
          <ButtonColumn
            increment={1}
            type="danger"
            length={6}
            onClick={this.handleClick}
          />
          <ButtonColumn
            increment={2}
            type='success'
            length={6}
            onClick={this.handleClick}
          />
        </div>
        <div>
          <p>You've clicked {this.state.lastNum}</p>
        </div>
      </div>
    );
  }
}

export default App;
