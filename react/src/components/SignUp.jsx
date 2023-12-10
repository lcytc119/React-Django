import { useEffect, useState } from "react";
import { signUp } from '../utilities'
export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <form 
         onSubmit={(e)=>[
            e.preventDefault(),
            signUp(name,email,password),
            setEmail(''), 
            setName(''), 
            setPassword('')
            ]}
            style={{display:'flex', flexDirection:'column'}}>
            <h2>Sign Up</h2>
            <input 
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <input 
                placeholder="password" 
                type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <input type='submit' value='sign up'/>
        </form>
    )
}