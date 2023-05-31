import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quote.css';

const headers = {
  'X-Api-Key': 'VtmOQOFHRFLo4Lyp7G9bZw==7m0QdxrDfY5mRlsF',
};

const GetQuote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://api.api-ninjas.com/v1/quotes?category=movies', { headers })
      .then((resp) => {
        setQuote(resp.data[0]);
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, [headers]);
  return (
    <div className="quote">
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h3>{quote.quote}</h3>
          <p>{quote.author}</p>
        </>
      )}
      <>
        {error ? (
          <p>Sorry... we are experiencing some errors.</p>
        ) : (
          false
        )}
      </>
    </div>
  );
};

export default GetQuote;
