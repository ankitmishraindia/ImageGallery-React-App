import axios from "axios"
import { useParams } from "react-router-dom"
import './ImageDetails.css'
import { useEffect, useState } from "react"
import { BiChevronLeft, BiChevronRight} from 'react-icons/bi'

function ImageDetails(){
    const [imageDetail,setImageDetail]=useState({})  
    const [id,setId]=useState(useParams().id)
    console.log(useParams().id)
    
   //fetching data from api
    async function loadImageDetails(){
        if(id&&id>0){
            const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response.data.photo)
        setImageDetail({
            url:response.data.photo.url,
            title:response.data.photo.title,
            description:response.data.photo.description,
            user:response.data.photo.user
        })
        }
        
    }
   //useEffect hook to making request after every changes of id
    useEffect(()=>{
        loadImageDetails()
    },[id])

    //left arrow icon change code
    function leftClick(){
        const newId=id-1;
        setId(newId)
        console.log(newId)
    }
    
    //right icon onclick code
    function rightClick(){
        const newId=Math.floor(id+1);
        setId(newId)
        console.log(newId)
    }
    return(
        <div className="imageDetails">
            {/* react left arrow icon        */}
            <BiChevronLeft fontSize="70px" cursor="pointer" onClick={leftClick} onChange={(id<=0)?setId(19):null}/>
            <img src={imageDetail.url}/>
            <div>
                <h1>{imageDetail.title}</h1>
                <p>{imageDetail.description}</p>
            </div>
            
            {/*    react right arrow icon */}
               <BiChevronRight fontSize="70px" cursor="pointer" onClick={rightClick} onChange={(id>=19)?setId(1):null}/>

        </div>
    )
}
export default ImageDetails;