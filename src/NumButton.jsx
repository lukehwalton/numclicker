import {Component} from 'react';

class NumButton extends Component{
  constructor(props){
    super();
    this.props = props;
    this.buttonClass = `btn btn-outline-${this.props.type}`;
  }

  handleClick = () => {
    this.props.onClick(this.props.num);
  }

  render(){
    const buttonStyle={
      width: '30ch',
      margin: '10px',
      padding: '10px'
    }
    return(
      <>
        <button
          style={buttonStyle}
          onClick={this.handleClick}
          class={this.buttonClass}>
          {this.props.num}
        </button>
      </>
    );
  }
}

export default NumButton;