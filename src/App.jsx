
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const App = () => {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.slip.advice);
        setIsLoading(false);
      });
  }, []);

  const fetchNewQuote = () => {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.slip.advice);
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1>Quotes/Advice</h1>
      <div className="quote">
        <h3>{quote}</h3>
      </div>
      <div className = "loader">
        {isLoading ? (
          <ThreeDots color="#00BFFF" height={80} width={80} />
        ) : null}
      </div>
      <div className="btn">
        <button onClick={fetchNewQuote}>New Quote</button>
      </div>
    </>
  );
};

export default App;
