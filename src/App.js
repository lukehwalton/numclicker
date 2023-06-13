import './App.css';
import NumButton from './NumButton';
import {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {lastNum: null};
  }

  handleButtonClick = (num) => console.log(num);

  render(){
    return (
      <div class="container text-center">
        <NumButton
          num="1"
          type="danger"
          onClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default App;
