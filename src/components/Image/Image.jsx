import './Image.css'
import { Link} from 'react-router-dom';
function Image({source,id}){
    return(
        
        <>
         <Link to={`/Image/${id}`}>
              <img className='Image' src={source} alt="react-Image" title='Click for Details'/>

           </Link>          
        </>
          
        
        
    )
}
export default Image;