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
    const source = axios.CancelToken.source();
    setIsLoading(true);
    setError(false);
    axios.get('https://api.api-ninjas.com/v1/quotes?category=movies', { headers, cancelToken: source.token })
      .then((resp) => {
        setQuote(resp.data[0]);
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
        setError(true);
      });
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="quote">
          <p className="loading-text">Loading ...</p>
        </div>
      ) : (
        <div className="quote">
          {error ? (
            <p className="error-text">Sorry... We are experiencing some errors..</p>
          ) : (
            <>
              <p className="quote-text">
                &ldquo;
                {quote.quote}
                &rdquo;
                {' - '}
                {quote.author}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GetQuote;
