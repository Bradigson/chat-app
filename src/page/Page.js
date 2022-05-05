import '../App.css';
import ChatRoom from '../components/ChatRoom';
import {useState} from 'react';
import {Navigate} from 'react-router-dom';

function Page() {

  const [user, setUser] = useState(
    localStorage.getItem('user')
  )

  return (
    <div className="container-fluid">
 
      
        {
          user ? <ChatRoom/> : <Navigate to='/'/>
        }
    
    </div>
  );
}

export default Page;
