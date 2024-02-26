import React, { useState, useEffect } from 'react'
import QuotesAuthor from '../Components/QuoteAuthor'
import QuotesText from '../Components/QuotesText'
import Buttons from '../Components/Buttons'
import axios from 'axios'

function Quotes() {
    const [quote, setQuote] = useState("Something about Richness")
    const [author, setAuthor] = useState("Frida Kahlo")
    const [quotesData, setQuotesData] = useState([])
    const [color, setColor] = useState("rgb(243, 156, 18)");

    const randomColor = () => {
        let colorPattern = "1234567890ABCDEF"
        let color = "#"
        for (let i=0; i<6; i++) {
            color = color + colorPattern[Math.floor(Math.random() * 16)]
        }
        return color
        
    }

    useEffect(() => {
        const fetchQuotes = async() => {
            const res = await axios.get("https://gnews.io/api/v4/search?q=example&apikey=768e0f537909c788527a91f5e124c137")
            .then((res) => {
                const quotesData = [...res.data.quotes];
                const color = randomColor;
                document.body.style.color = color;
                document.body.style.backgroundColor = color;
                setQuotesData({
                    quotesData: quotesData,
                    color: color,
                })
            }).catch((error) => console.log(error))
            // console.log(res.data.articles)
            // setBlogs(res.data.articles)
        }
        fetchQuotes()
    }, [])

    const handleClick = () => {
        let randomIndex = Math.floor(Math.random() * 16)
        let { quote, author } = quotesData[randomIndex];
        // let { quote, author } = this.state.quotesData[randomIndex];


        const color = randomColor();
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        // this.setState({
        //     quote: quote,
        //     author: author,
        //     color: color
        // })

        setQuotesData({
            quote: quote,
            author: author,
            color: color
        })
    }

  return (
    <div>
      <QuotesText quote={quote} color={color} />
      <QuotesAuthor author={author} color={color} />
      <Buttons 
        handleClick={handleClick} 
        
        color={color}  
      />
    </div>
  )
}

export default Quotes