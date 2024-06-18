import React from 'react'
// import { Link } from 'react-router-dom'


  const signIn = async () => {
    try {
      
      window.location.href = "http://localhost:3333/auth/google";
    
    callBacks()
    } catch (error) {
      console.error("Error authenticating with Google:", error);
    }
  };

const callBacks=()=>{
fetch('http://localhost:3333/auth/google/callback')
.then(response => response.json())
.then(data => {
   
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
}


function Login() {
  return (
    <>
    <div id='loginPage'>
    <div className='container' id='form'>
        <div className='row'>
            <div className='col-3 text-center text-light offset-4 rounded-3  border border-success p-4'>
                <div>
                <h1 className='pb-3'> Tensor Go</h1>
                <button className='btn btn-outline-light' onClick={ () => {signIn()}} > LogIn with Google</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login