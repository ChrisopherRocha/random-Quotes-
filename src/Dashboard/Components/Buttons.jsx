import React from 'react'

function Buttons(props) {
  return (
    <div className='buttons'>
      <button 
      style={{ backgroundColor: props.color}} 
      className='button'
      onClick={props.handleClick}
      id={props.id}
      >
        New Quote
    </button>
    </div>
  )
}

export default Buttons