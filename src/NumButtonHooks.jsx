const NumButtonHooks = ({num, type, onClick}) => {
  const handleClick = () => {
    onClick(num)
  }
  const buttonClass = `btn btn-outline-${type}`;

  const buttonStyle={
    width: '30ch',
    marginBottom: '15px',

    padding: '10px'
  }

  return(
    <>
      <button
        style={buttonStyle}
        onClick={handleClick}
        class={buttonClass}>
        {num}
      </button>
    </>
  );
}

export default NumButtonHooks;