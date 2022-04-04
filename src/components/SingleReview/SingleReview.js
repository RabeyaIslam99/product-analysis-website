import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name,picture,review,rating} = props.review;
    return (
      
        <div className="single-review">
            <img src={picture} alt="" />
            <h5>Name: <span>{name}</span></h5>
            <p>Review: <small>{review}</small>

            </p>
            <p>Ratings:{rating}</p>
            
        </div>
    );
};

export default SingleReview;