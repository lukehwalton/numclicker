import './App.css';
import ButtonRowHooks from './ButtonRowHooks';
import DisplayHooks from './DisplayHooks';
import {useState} from 'react';

const AppHooks = () =>{
  const [lastNum, setLastNum] = useState('nothing');
  const handleClick = (num) => setLastNum(num);
  const rows = [];
  const numRows = 6;
  
  for(let i=1; i <= numRows; i++){
    rows.push(<ButtonRowHooks
                key={i}
                rowNum={i}
                onClick={handleClick} />)
  }

  return (
    <>
    <div class="container text-center">
      <br />
      {rows}
      <DisplayHooks lastNum={lastNum}/>
    </div>
    </>
  );
}


export default AppHooks;