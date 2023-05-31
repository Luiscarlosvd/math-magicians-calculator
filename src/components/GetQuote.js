import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quote.css';

const headers = {
  'X-Api-Key': 'VtmOQOFHRFLo4Lyp7G9bZw==7m0QdxrDfY5mRlsF',
};

const GetQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('https://api.api-ninjas.com/v1/quotes?category=movies', { headers })
      .then((resp) => setQuote(resp.data[0]));
  }, []);

  console.log(quote.quote);
  return (
    <div className="quote">
      <h3>{quote.quote}</h3>
      <p>{quote.author}</p>
    </div>
  );
};

export default GetQuote;
