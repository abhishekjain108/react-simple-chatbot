import React from 'react'
import { useState } from 'react';

const Login = ({onLogin}) => {

  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  function handleLogin(e){

    e.preventDefault()

    if (username==='abhishek' && password==='abhishek') {
      onLogin(username);
    }
    else{
      let x = document.getElementsByTagName('input')
      x[0].style.cssText =`border : solid 3px red `
      let errormsz = document.getElementsByTagName('h6')
      errormsz[0].innerText =" Invalid username"
      errormsz[0].style.cssText =`color : red`

      let y = document.getElementsByTagName('input')
      y[1].style.cssText =`border : solid 3px red `
      let errormsz2 = document.getElementsByTagName('h6')
      errormsz2[1].innerText =" Invalid password"
      errormsz2[1].style.cssText =`color : red`
    }

  }


  return (

    
  <>
        <h3 className='subhead'><marquee behavior="" direction="">This application allows you to chat with bot !!!</marquee></h3>
        <h1 className='head'>Chat-oons</h1>
        <div className='container border border-success rounded  bg-dark bg-gradient' style={{width:"330px" ,height:"250px"  ,marginTop:"35px"}}>
        <h4 className='text-center text-light'>Login</h4>
        <div className="input-group mb-3" style={{width:"300px"}}>
        <input type="text" className="form-control" placeholder="Username" style={{borderColor:"green"}} value={username} 
        onChange={(e)=>{ setUsername(e.target.value) }}/>
        </div>
        <h6></h6>
        <div className="input-group mb-3" style={{width:"300px"}}>
        <input type="password" className="form-control" placeholder="Password" style={{borderColor:"green"}} value={password}
        onChange={(e)=>{ setPassword(e.target.value) }}/>
        </div>  
        <h6></h6>
        <button onClick={handleLogin} type="button" className="btn btn-success" style={{display:'block' , margin:'auto'}}>log in</button>
        </div>  
    
  </>

  )
}

export default Login  