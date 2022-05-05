import '../assets/styles/ChatRoom.scss';
import '../assets/styles/responisve/ChatRoomResponsive.scss';
import { emojis } from './ButtonFile';
import { useState, useEffect, useRef } from 'react';
import app from '../firebase/Credenciales';
import {getFirestore, addDoc, collection, query, onSnapshot, orderBy, getDocs, serverTimestamp} from 'firebase/firestore';
const dataBase = getFirestore(app);

const ChatRoom = ()=>{

    const [mensaje, setMensaje] = useState('');
    const [user, setUser] = useState(
        localStorage.getItem('user')
    )
    const date = new Date();
    const mes = date.getMonth() + 1;
    const fecha = date.getDay() +'/'+ mes +'/'+ date.getFullYear();
    const hora = date.toLocaleTimeString();
    const dummy = useRef();
    
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
                mensaje, timestap:serverTimestamp(), fecha, hora, user
            })
            setMensaje('');
            dummy.current.scrollIntoView({ behavior: 'smooth'});
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
            const q = query(collectionRef, orderBy('timestap', 'asc'));
            const unsub = onSnapshot(q, (snapshot)=>{
                setDotos(snapshot.docs.map((doc)=>({...doc.data(), di:doc.id})))
            })
        }
        getAllmensjae();
    },[])

    // const userFersLetter = user.slice(0,1).toUpperCase();

    const info = datos.map(info=>info.user);


    // people online
    const [people, setPeople] = useState([]);
    useEffect(()=>{
        const getAllpeople = ()=>{
            try{
                const collectionRef = collection(dataBase, 'usuarios');
                const q = query(collectionRef, orderBy('user', 'asc'));
                onSnapshot(q, (querySnap)=>{
                    setPeople(querySnap.docs.map((doc)=>({...doc.data(), id:doc.id})));
                })
            }catch(err){
                console.log(err)
            }
        }
        getAllpeople()
    },[]);


    // emojis
    // const emoji = emojis.map(doc=> doc)
    // // console.log(emoji)
    // console.log(emojis)

    return(
        <div className='chat-room'>
            <article className='chat-room-container'>
                {/* section 1 header */}
                <section className='chat-room__section1'>
                    
                    <div>
                        <h2>{user}</h2>
                        <span className='text-muted'>online</span>
                    </div>
                    <div className='text-muted  online-people'>
                        <i className='bx bxs-video'></i>

                        <div className="btn-group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Online Peple
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {/* <li><button className="dropdown-item" type="button">Action</button></li> */}
                                {
                                    people.map(people=>{
                                        return(
                                            <li key={people.id} className='mb-1'><button className="dropdown-item" type="button">
                                            <span className=' first-letter-people'>{people.user.toUpperCase().slice(0,1)}</span>{' '}{people.user}{ ' '}
                                            <i className='bx bxs-circle'></i></button></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </section>

                {/* section 2 message */}
                <section className={`${user === info ? 'chat-room__section2' : ' chat-room__section2-other'}`}>
                  {
                      datos.map((m,index)=>{
                          return(
                              <div className={`${user === m.user ? 'card massage ' : 'card other-user'}`} key={index}>
                                  <div className=' user'>
                                      <span>{m.user}</span>
                                  </div>
                                  <p className=''>{m.mensaje}</p>
                                  <div className=' hora-container'>
                                      <span className='message__hora text-muted'>{m.hora}</span>
                                  </div>
                                  <div ref={dummy}></div>
                              </div>
                          )
                      })
                  }

                </section>

                {/* section */}
                <form className='chat-room__section3' onSubmit={handleSend}>
                                <div className="btn-group dropup">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                                     <i className='bx bxs-smile text-muted'></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <table className='table table-borderless'>
                                            <tbody>
                                            <tr>
                                                <td><li><button className="dropdown-item" type="button">{emojis[1]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[2]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[3]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[4]}</button></li></td>
                                            </tr>
                                            <tr>
                                                <td><li><button className="dropdown-item" type="button">{emojis[5]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[6]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[7]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[8]}</button></li></td>

                                            </tr>
                                            <tr>
                                                <td> <li><button className="dropdown-item" type="button">{emojis[9]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[10]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[11]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[12]}</button></li></td>
                                            </tr>
                                            <tr>
                                                <td> <li><button className="dropdown-item" type="button">{emojis[13]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[14]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[15]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[16]}</button></li></td>
                                            </tr>
                                            <tr>
                                                <td><li><button className="dropdown-item" type="button">{emojis[17]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[18]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[19]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[20 ]}</button></li></td>
                                            </tr>
                                            <tr>
                                                <td><li><button className="dropdown-item" type="button">{emojis[21]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[22]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[23]}</button></li></td>
                                                <td><li><button className="dropdown-item" type="button">{emojis[24]}</button></li></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                         
                                    </ul>
                                </div>
                    {/* <button className='btn'></button> */}
                    <button className='btn text-muted' type=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                        </svg>
                    </button>
                    <input  type="text" className="form-control" placeholder="type your massage here..." aria-label="Username" aria-describedby="addon-wrapping" value={mensaje} onChange={handleMessage}/>
                    <button className='btn' ><i className='bx bxl-telegram'></i></button>
                    
                </form>
            </article>
        </div>
    )
}
export default ChatRoom;