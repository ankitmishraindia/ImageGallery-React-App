import axios from "axios"
import { useEffect, useState } from "react";
import './ImageList.css'
import Image from "../Image/Image";

function ImageList(){
    const URL='https://api.slingacademy.com/v1/sample-data/photos?limit=20';
    const [imageList,setImageList]=useState([])
    const [isLoading,setIsLoading]=useState('Loading...')
    
    async function downloadImages(){
        try {
            const response=await axios.get(URL)
            const data=response.data;
            const imageListArray=data.photos;
            setImageList(imageListArray)
            console.log(data)
            
            setIsLoading('')
        } catch (error) {
            console.log(error)
            window.alert('Something went wrong.Please try again.')
        }
    }

    useEffect(()=>{
        downloadImages()
    },[])

    return(
        <>
        <p>{isLoading}</p>
        <div className="imageList">

            {
               imageList.map((item)=>(
                <Image key={item.id} id={item.id} source={item.url}/>
               ))
            }
        </div>
        </>
        
    )
}
export default ImageList;