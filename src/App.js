import './App.css';
import ButtonColumn from './ButtonColumn';
import ButtonRow from './ButtonRow';
import Display from './Display';
import {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {lastNum: 'nothing'};
    this.numRows = 6;
  }

  handleClick = (num) => this.setState({lastNum: num});

  render(){
    const rows = [];
    for(let i=1; i <= this.numRows; i++){
      rows.push(<ButtonRow
                  key={i}
                  rowNum={i}
                  onClick={this.handleClick} />)
    }
    return (
      <>
      <div class="container text-center">
        {rows}
        <Display 
        lastNum={this.state.lastNum}/>
      </div>
      </>
    );
  }
}

export default App;
