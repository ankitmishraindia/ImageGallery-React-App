import { Route, Routes } from "react-router-dom";
import ImageList from "../ImageList/ImageList";
import ImageDetails from "../ImageDetails/ImageDetails";

function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<ImageList/>}></Route>
            <Route path="/Image/:id" element={<ImageDetails/>}></Route>
        </Routes>
    )
}
export default CustomRoutes;