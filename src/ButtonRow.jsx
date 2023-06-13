import {Component} from 'react';
import App from './App';
import NumButton from './NumButton';

class ButtonRow extends Component{
  handleClick = (num) => this.props.onClick(num);

  render(){
    return(
      <div class='row'>
        <div class='col'>
          <NumButton
            key={`${this.props.rowNum}a`}
            type="danger"
            num={this.props.rowNum}
            onClick={this.handleClick}/>
        </div>
        <div class='col'>
          <NumButton
            key={`${this.props.rowNum}b`}
            type="success"
            num={this.props.rowNum * 2}
            onClick={this.handleClick}/>
        </div>
        <hr />
      </div>
    )
  }
}

export default ButtonRow;