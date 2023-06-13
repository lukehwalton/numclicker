import {Component} from 'react';

class Display extends Component{
  render(){
    const displayStyle = {
      padding: '10px',
      backgroundColor: '#75c0e0',
      margin: '15px'
    }

    return(
      <div style={displayStyle} class='col'>
        <p>You've clicked {this.props.lastNum}</p>
      </div>
    )
  }
}

export default Display;