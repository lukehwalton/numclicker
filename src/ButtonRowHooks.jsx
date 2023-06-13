import NumButtonHooks from './NumButtonHooks';

const ButtonRowHooks = ({rowNum, onClick}) => {
  const handleClick = (num) => onClick(num);

  return(
    <div class='row'>
      <div class='col'>
        <NumButtonHooks
          key={`${rowNum}a`}
          type="danger"
          num={rowNum}
          onClick={handleClick}/>
      </div>
      <div class='col'>
        <NumButtonHooks
          key={`${rowNum}b`}
          type="success"
          num={rowNum * 2}
          onClick={handleClick}/>
      </div>
      <hr />
    </div>
  )
}

export default ButtonRowHooks;