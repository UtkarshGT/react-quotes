import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  function getQuote() {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
      .then((response) => response.json())
      .then((result) => {
        setQuote(result.quotes[0].text);
        setAuthor(result.quotes[0].author);
      })
      .catch((error) => {
        setQuote("API Error");
      });
  }
  useEffect(getQuote, []);

  return (
    <div className="flex">
      <h2>{quote}</h2>
      {author === "" ? "" : <h4 className="my-3">- {author}</h4>}
      <button type="button" className="btn btn-primary mt-4" onClick={getQuote}>
        Get Quote
      </button>
    </div>
  );
}
