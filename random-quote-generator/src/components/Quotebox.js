import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import './Quotebox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Quotebox({ setBgColor }) {
  
  const [quote, setQuote] = useState( { text: "", author: "" } );
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);

  const colors = [
    '#16a085', '#27ae60', '#2c3e50', '#f39c12', 
    '#e74c3c', '#9b59b6', '#FB6964', '#342224', 
    '#472E32', '#BDBB99', '#77B1A9', '#73A857'
  ];

  const fetchQuote = async () => {
    setLoading(true);
    setFade(true);

    try {
    const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
    const data = await response.json();
      console.log(data);
    if (data){
      setTimeout(() => {
      setQuote( { text: data.quote, author: data.author } );
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
      console.log(randomColor);
      setFade(false);
      }, 300);
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

      <Card.Text id="text" className={`p-4 ${fade ? 'fade-out' : 'fade-in'}`}>
        {loading ? "Loading..." : `"${quote.text}"`}
        </Card.Text>

      <Card.Footer id="author" className={`author-name ${fade ? 'fade-out' : 'fade-in'}`}>
        {loading ? "Loading auth name..." : `- ${quote.author}`}
        </Card.Footer>

      <div className="d-flex justify-content-between mt-auto">

          <a id="tweet-quote"
         href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
           `"${quote.text}" - ${quote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary m-3 btn-sm"
        >
         <FontAwesomeIcon icon={faTwitter} />
       </a>

        <Button 
          id="new-quote" 
          onClick={fetchQuote} 
          disabled={loading} 
          className="btn btn-primary m-3 btn-sm"
        >
          {loading ? "Loading..." : "New Quote"}
        </Button>
        
      </div>

    </Card>
        );
};