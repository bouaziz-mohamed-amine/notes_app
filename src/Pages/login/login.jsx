import React, { useRef, useState ,useEffect} from 'react';
import { useHistory } from 'react-router';
import NavBar from '../../Layouts/navbar/NavBar';
import './login.css';



const Login = () => {
    
  const adressref=useRef();
  const passwordref=useRef();
  const history=useHistory();
  
  const [islogin,setislogin] =useState(false);

  function handleSubmit(e){
    e.preventDefault();
    const adress = adressref.current.value ;
    const password = passwordref.current.value;
    if (adress==='amine.m.a1998@gmail.com' && password==='amin0000'){
        setislogin(true);
    }
    else {
        alert( 'there are errors between :'+ adress+ 'or'+password);   
    }
  }
    useEffect(() => {
     if(islogin) history.push('/notes') ;
    });
    return ( 
        <React.Fragment>
        <NavBar isAuthorized={false} />
        <div className='login'>
        <h1 >LOGIN</h1>
        <form onSubmit={handleSubmit}>
        <label>adress</label>
        <input  type="email" ref={adressref} />
        <br/>
        <label>password</label>
        <input type='password' ref={passwordref} />
        <button type='submit'>Click</button>
        </form>
        </div>
        
        </React.Fragment>
     );
}
 
export default Login;