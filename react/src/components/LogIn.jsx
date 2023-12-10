import {useEffect, useState} from "react"
import { logIn } from "../utilities";

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        console.log(email,password)
    },[email,password])

    
    return (
        <form onSubmit={(e)=>[e.preventDefault(), logIn(email, password), setEmail(''), setPassword('')]}>
            <h3>Log In</h3>
            <input 
                placeholder="email"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
            <input 
                placeholder="password"  
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                />
            <input type='submit' value='Log in'/>
        </form>
    )
}