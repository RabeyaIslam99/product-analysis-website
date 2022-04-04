import React from 'react';

const SingleReview = (props) => {
    const {name,picture,review,rating} = props.review;
    return (
      
        <div>
            <img src={picture} alt="" />
            <h5>Name: <span>{name}</span></h5>
            <p>Review: <small>{review}</small></p>
            
        </div>
    );
};

export default SingleReview;