import {Component} from 'react';
import NumButton from './NumButton';

class ButtonColumn extends Component{

  handleClick = (num) => this.props.onClick(num)

  render(){
    const buttons = [];
    for(let i=1; i <= this.props.length; i++){
      buttons.push(
        <NumButton
          key={i}
          num={i*this.props.increment}
          type={this.props.type}
          onClick={this.handleClick}
        />
      )
    }
    return(
      <div class='col'>
        {buttons}
      </div>
    )
  }
}

export default ButtonColumn;