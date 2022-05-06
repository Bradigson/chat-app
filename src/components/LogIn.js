import '../assets/styles/LogIn.scss';
import '../assets/styles/responisve/LogInResponsive.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../firebase/Credenciales';
import {getFirestore, addDoc, collection} from 'firebase/firestore';
const dataBase = getFirestore(app);

const LogIn = ()=>{
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUser = e=>{
        setUser(e.target.value)

    }
    const handlePassword = e=>{
        setPassword(e.target.value)
    }
    const handleSubmit = e=>{
        e.preventDefault();
        if(user === ''){
            alert('campo user vacio')
        }else if(password === ''){
            alert('campo password vacio');
        }else{
            navigate('chat-room')
            localStorage.setItem('user', user);
            addDoc(collection(dataBase, 'usuarios'),{
                user
            })
        }
    }
    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className=' img'>
                    
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text text-muted" id="basic-addon1"><i className='bx bxs-user'></i></span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" 
                    aria-describedby="basic-addon1" value={user} onChange={handleUser}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text text-muted" id="basic-addon1"><i className='bx bxs-lock-open-alt' ></i></span>
                    <input type="password" className="form-control" placeholder="Enter any password you want" 
                    aria-label="Username" aria-describedby="basic-addon1" value={password} onChange={handlePassword}/>
                </div>
                <div className=' text-center'>
                    <button className="btn btn-primary">
                        LOGIN
                    </button>
                </div>

            </form>
        </div>
    )
}

export default LogIn;