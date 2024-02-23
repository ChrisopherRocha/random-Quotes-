import './App.css';
import Quotes from './Dashboard/Quotes/Quotes'
import Buttons from './Dashboard/Components/Buttons'
import Footer from './Dashboard/Components/Footer'
import QuotesAuthor from './Dashboard/Components/QuoteAuthor'
import QuotesText from './Dashboard/Components/QuotesText'

function App() {
  return (
    <div className="App">
      <h1>Random Quotes Generator</h1>
      <Quotes />
      {/* <Buttons /> */}
      <Footer />
      {/* <QuotesAuthor /> */}
      {/* <QuotesText /> */}
    </div>
  );
}

export default App;
