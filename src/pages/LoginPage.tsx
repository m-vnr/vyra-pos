import { useState } from 'react';
import { signIn } from '../services/authService';

export default function LoginPage(){
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');

 const login = async () => {
   await signIn(email,password);
 };

 return (
  <div>
   <h1>Vyra POS Login</h1>
   <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
   <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
   <button onClick={login}>Login</button>
  </div>
 );
}