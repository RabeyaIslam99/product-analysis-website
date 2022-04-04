import { useEffect, useState } from "react"
const useReviews= () =>{
    const [reviews, setRiviews] = useState([]);
    useEffect(() =>{
        fetch('reviewdata.json')
        .then(res => res.json())
        .then(data => setRiviews(data))
    },[])
    return[reviews, setRiviews]
}
export default useReviews;