import { Route, Routes } from "react-router-dom";
import LogIn from "../components/LogIn";
import Page from "../page/Page";
const Rutas = ()=>{
    return(
        <Routes>
            <Route path='/' element={<LogIn/>}/>
            <Route path='chat-room' element={<Page/>}/>
        </Routes>
    )
}

export default Rutas;