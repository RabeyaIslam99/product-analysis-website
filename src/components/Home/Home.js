
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import image from './../../images (3).jpg'
import './Home.css'
const Home = () => {
    const [reviews, setRiviews] = useReviews();
    return (
      
        <div>
          
         <section style={{display:'flex',padding:'80px',marginLeft:'50px'}}>
         <div style={{marginRight:"100px"}}>
          <h3> Best Way to style yourself</h3>
          <p>In modern discourse, hijab refers to headcoverings worn by Muslim women. While Islamic headcoverings can come in many forms, hijab often specifically refers to a cloth wrapped around the head and neck, covering the hair but leaving the face visible</p>
          </div>
           <div>
               <img src={image} alt="" />
           </div>
            
         </section>

         <section>
             <h2>Customer Review about our Product</h2>
             <div className='review-list-container'>
                 {
                     reviews.map(review =>
                     <SingleReview
                     key={review.id}
                     review={review}
                     ></SingleReview>)
                 }

             </div>
             <Link to='/reviews'> <button className='review-btn'
        >See all reviews</button></Link>
            

         </section>
        </div>
    );
};

export default Home;