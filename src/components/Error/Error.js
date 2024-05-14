import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <div style={{textAlign:'center'}}>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  )
}

export default Error
