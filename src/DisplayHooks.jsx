const DisplayHooks = ({lastNum}) => {
  const displayStyle = {
    paddingTop: '12px',
    paddingBottom: '1px',
    backgroundColor: '#d1ecf1',
    borderTop: '1px solid #bfe5eb',
    borderBottom: '1px solid #bfe5eb'
  }

  return(
    <div style={displayStyle} class='col'>
      <p class="text-primary"> You've clicked {lastNum}</p>
    </div>
  )
}

export default DisplayHooks;