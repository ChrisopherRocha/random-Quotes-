import React from 'react'

function QuoteAuthor({ author, color }) {
  return (
    <div className='quote-text' style={{ color: color}}>
      <span id='author'>{author}</span>
    </div>
  )
}

export default QuoteAuthor