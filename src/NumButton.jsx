import {Component} from 'react';

class NumButton extends Component{
  
  handleClick = () => this.props.onClick(this.props.num);

  render(){
    const {num, type} = this.props;
    const buttonStyle={
      backgroundColor: 'white',
      width: '100%',
      margin: '10px',
      padding: '10px'
    }
    return(
      <button style={buttonStyle} onClick={this.handleClick} class={`btn btn-outline-${type}`}>{num}</button>
    );
  }
}

export default NumButton;