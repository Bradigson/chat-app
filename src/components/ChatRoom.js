import '../assets/styles/ChatRoom.scss';
import { useState, useEffect } from 'react';
import app from '../firebase/Credenciales';
import {getFirestore, addDoc, collection, query, onSnapshot, orderBy, getDocs, serverTimestamp} from 'firebase/firestore';
const dataBase = getFirestore(app);

const ChatRoom = ()=>{

    const [mensaje, setMensaje] = useState('');
    const date = new Date();
    const mes = date.getMonth() + 1;
    const fecha = date.getDay() +'/'+ mes +'/'+ date.getFullYear();
    const hora = date.toLocaleTimeString();
    
    const handleMessage = e=>{
        setMensaje(e.target.value);
    }

    const handleSend = async(e)=>{
        e.preventDefault();
        
        try{
           if(mensaje === ''){
               return
           }else{
                await addDoc(collection(dataBase, 'message'),{
                mensaje, timestap:serverTimestamp(), fecha, hora
            })
            setMensaje('');
           }
            
        }catch(err){
            console.log(err)
        }
    }
    


    // get all message
    const [datos, setDotos] = useState([]);
    useEffect(()=>{
        const getAllmensjae = async()=>{
            const collectionRef = collection(dataBase, 'message');
            const q = query(collectionRef, orderBy('timestap', 'desc'));
            const unsub = onSnapshot(q, (snapshot)=>{
                setDotos(snapshot.docs.map((doc)=>({...doc.data(), di:doc.id})))
            })
        }
        getAllmensjae();
    },[])


    
    return(
        <div className='chat-room'>
            <article className='chat-room-container'>
                {/* section 1 header */}
                <section className='chat-room__section1'>
                    <div>
                        <h2>User Name</h2>
                        <span className='text-muted'>online</span>
                    </div>
                    <div>
                        <i className='bx bxs-video'></i>
                    </div>
                </section>

                {/* section 2 message */}
                <section className='chat-room__section2'>
                  {
                      datos.map(m=>{
                          return(
                              <p className='card massage'>
                                  {m.mensaje}
                                  <div className=' hora-container'>
                                      <span className='message__hora text-muted'>{m.hora}</span>
                                  </div>
                              </p>
                          )
                      })
                  }

                </section>

                {/* section */}
                <form className='chat-room__section3' onSubmit={handleSend}>
                    <button className='btn'><i className='bx bxs-smile text-muted'></i></button>
                    <button className='btn text-muted'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                        </svg>
                    </button>
                    <input autoFocus type="text" className="form-control" placeholder="type your massage here..." aria-label="Username" aria-describedby="addon-wrapping" value={mensaje} onChange={handleMessage}/>
                    <button className='btn' ><i className='bx bxl-telegram'></i></button>
                </form>
            </article>
        </div>
    )
}
export default ChatRoom;