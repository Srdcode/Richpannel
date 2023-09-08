import React from 'react'
import { useRef,useState,useEffect } from 'react'

const Login = () => {

   const userRef = useRef();
   const errRef = useRef();

   const [user,setUser] = useState('');
   const [pwd,setPwd] = useState('');
   const [errMsg,setErrMsg] = useState('');
   const [success,setSuccess] = useState(false);
  

   useEffect(() => {
       userRef.current.focus();
   },[])

   useEffect(() => {
    setErrMsg('');
   },[user,pwd])

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user,pwd);
      setUser('')
      setPwd('')
      setSuccess(true)
   }


  return (
    <>
        { success ? (
           <section>
           <h1> Hii you are Logged IN </h1>
           <br/></section>
         
    
   ) : (

    <section className='section1'>
        <p ref = {errRef} className= {errMsg ? "errMsg" : "offscreen"} aria-live = "assertive">{errMsg} </p>
        <h1> Login to your account</h1>
       <form onSubmit={handleSubmit}>
         <label htmlFor = 'username'>username</label>
         <input 
            type = 'text'
            id ='username'
            ref = {userRef}
            autoComplete = 'off'
            onchange = {(e) => setUser(e.target.value)}
            
            required                      
         />
         <label htmlFor = 'email'>Email</label>
         <input 
            type = 'text'
            id ='email'
            ref = {userRef}
            autoComplete = 'off'
            onchange = {(e) => setUser(e.target.value)}
            
            required                      
         />
         <label htmlFor = 'password'>Password</label>
         <input 
            type = 'password'
            id ='password'
            ref = {userRef}
            onchange = {(e) => setPwd(e.target.value)}
            
            required
         />
         
         <button className='button1'>Sign IN</button>
       </form>
       <p className='toreg'>

        Need an Account ?
        <span className='line'>
            
            <a href = '#'>Sign Up</a>
        </span>
       </p>
    </section>
    )}
  </>
  )
}

export default Login