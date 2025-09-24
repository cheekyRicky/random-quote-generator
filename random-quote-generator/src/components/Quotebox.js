import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

export default function Quotebox() {
  
  const [quote, setQuote] = useState( { text: "", author: "" } );
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    if (data && data.length > 0){
      setQuote( { text: data[0].q, author: data[0].a } );
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

      <Card.Header>Quote:</Card.Header>

      <Card.Text id="text" className="p-4">
        {loading ? "Loading..." : `"${quote.text}"`}
        </Card.Text>

      <Card.Footer id="author" className="p-5">
        {loading ? "Loading auth name..." : `- ${quote.author}`}
        </Card.Footer>

      <Button id="new-quote" onClick={fetchQuote} disabled={loading}>
        {loading ? "Loading..." : "New Quote"}
        </Button>
        
      <a id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote.text}" - ${quote.author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary m-3"
      >
        Tweet Quote
      </a>


    </Card>
        );
};