import React from 'react'
import './Subheading.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Subheading = ({Subheading1,subheading2}) => {
  return (
    <div className='subhead'>
        <p>{Subheading1 || <Skeleton />}</p>
        <h2>{subheading2 || <Skeleton />}</h2>
    </div>
  )
}

export default Subheading