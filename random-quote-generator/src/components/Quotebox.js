import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import './Quotebox.scss';

export default function Quotebox() {
  
  const [quote, setQuote] = useState( { text: "", author: "" } );
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
    const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
    const data = await response.json();
      console.log(data);
    if (data){
      setQuote( { text: data.quote, author: data.author } );
      }
  } catch (error) {
    console.error("Error fetching quote:", error);
  } finally {
    setLoading(false);
  };
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Card id="quote-box" className="text-center">

      <Card.Header className="card-header">Quote:</Card.Header>

      <Card.Text id="text" className="p-4">
        {loading ? "Loading..." : `"${quote.text}"`}
        </Card.Text>

      <Card.Footer id="author" className="author-name">
        {loading ? "Loading auth name..." : `- ${quote.author}`}
        </Card.Footer>
        
      <div className="d-flex justify-content-between mt-auto">

          <a id="tweet-quote"
         href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
           `"${quote.text}" - ${quote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary  m-3"
        >
         Tweet Quote
       </a>

        <Button id="new-quote" onClick={fetchQuote} disabled={loading} className="btn btn-primary m-3">
        {loading ? "Loading..." : "New Quote"}
          </Button>
        
      </div>

    </Card>
        );
};