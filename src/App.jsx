
import { Link } from 'react-router-dom'
import './App.css'

import CustomRoutes from './components/routes/CustomRoutes'

function App() {
  return(
    <div className="container">
      <Link> 
         <h2>REACT IMAGE GALLERY</h2>
      </Link>
      
       <CustomRoutes/>
    </div>
  )
    
}

export default App
