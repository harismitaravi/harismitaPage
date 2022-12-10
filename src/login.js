import React from 'react';
import './login.css';
const Login=()=>{
	return(
		<div className='bgg'>

		<div className='signup'>
			<form action=""> 
			<div className='my'>
				<p> BEAT BOX-THE PITSTOP  </p>
			</div>
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="emai" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label><br></br>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
		</div>
	)
}


export default Login  