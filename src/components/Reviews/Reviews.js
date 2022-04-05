import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setRiviews] = useReviews();
    return (
        <div>
            <section>
             <h2>All review of our products review</h2>
             <div className='review-list-container'>
                 {
                     reviews.map(review =>
                    <SingleReview  key={review.id}
                    review={review}></SingleReview>
                    
                   )
                 }

             </div>

            

         </section>
        </div>
    );
};

export default Reviews;