import React, { useState } from 'react'
import QuotesAuthor from '../Components/QuoteAuthor'
import QuotesText from '../Components/QuotesText'

function Quotes() {
    const [quote, setQuote] = useState("Something about Richness")
    const [author, setAuthor] = useState("Frida Kahlo")
    const [quotesData, setQuotesData] = useState([])
    const [color, setColor] = useState("rgb(243, 156, 18)");


  return (
    <div>
      <QuotesText quote={quote} color={color} />
      <QuotesAuthor author={author} color={color} />
    </div>
  )
}

export default Quotes