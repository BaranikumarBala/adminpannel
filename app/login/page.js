"use clients"
import { useState } from "react"
import { useRouter } from "next/navigation";
import "./Login.css"
import Topbar from "./topbar";
import Footer from "./Footer";

const Login = () =>
{
    const [username, setUsername] = useState("");
    const [password,setpassword] = useState("");
    const [error, setError] = useState("");
    let {push} = useRouter();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        document.getElementById("logout");
        if(username==="" || password==="")
        {
            setError("Please Enter username and password");
        }
        else
        {
            if(username===password)
            {
                push('/dashboard');
            }
            else
            {
                setError("Username and password should be same");
            }
        }
    }
    return (
        <>
        <Topbar/>
        <form className="form" onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="form-head">
                    <h2>Welcome to Dashboard, Login</h2>
                </div>
                <label for="username">username</label>
                <div className="input">
                    <input type="text" name="username" id="username" autoFocus="off" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>
                <label for="password">password</label>
                <div className="input">
                    <input type="password" name="password" id="password" autoFocus="off" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
                </div>
                <button type="submit" className="btn">login</button>
                {error && <p className="error">{error}</p>}
                <button type="reset" className="btn">forgot your password?</button>
              </div>
           </form>
           <Footer/>
           </>)
}
export default Login