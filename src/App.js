import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import { useState } from 'react';
import Chatbot from './Component/Chatbot'

function App() {

  
  const [username, setUsername] = useState(null);

  const handleLogin = (user) => {
    setUsername(user);
  };

  const handleLogout = () => {
    setUsername(null);
  };
  return (
   <>
    <div className="app">
      {username ? (
        <Chatbot username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      
    </div>
    
  
   </>
  );
}

export default App;
