
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import image from './../../images (3).jpg'

const Home = () => {
    const [reviews, setRiviews] = useReviews();
    return (
      
        <div>
          
         <section style={{display:'flex',padding:'80px',marginLeft:'100px'}}>
         <div style={{marginRight:"100px"}}>
          <h3> Best Way to style yourself</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aliquid cupiditate sint nam ipsa quam delectus ut mollitia excepturi animi quae cumque laudantium amet recusandae neque minima. Enim, labore quae?</p>
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

             <button>See all reviews</button>

         </section>
        </div>
    );
};

export default Home;