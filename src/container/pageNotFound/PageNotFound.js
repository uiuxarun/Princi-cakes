import React from 'react';
import './PageNotFound.css';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='error_head'>
        <div className="error_left">
          <h1>404</h1>
          <p>Page not found</p>
          <h6>Don't get scared, get back to Home</h6>
          <Link to={'/'}>
            <Button text='Get Back' className='primary' />
          </Link>
        </div>
    </div>
  );
}

export default PageNotFound;
