import { useState } from 'react';

export default function LoginPage(){
 const [email,setEmail]=useState('');
 return <div><h1>Vyra POS Login</h1><input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' /></div>;
}
