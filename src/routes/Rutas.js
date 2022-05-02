import { Route, Routes } from "react-router-dom";
import Page from "../page/Page";
const Rutas = ()=>{
    return(
        <Routes>
            <Route path='/' element={<h1>Log input</h1>}/>
            <Route path='chat-room' element={<Page/>}/>
        </Routes>
    )
}

export default Rutas;