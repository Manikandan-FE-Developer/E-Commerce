import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login(){    
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [message, setMessage] = useState("");
    const history = useNavigate();

    async function logIn(e) {
        e.preventDefault();

        setMessage("Loading...");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            setMessage("Please fill in all fields");
        } else if (!emailRegex.test(email)) {
            setMessage("Incorrect email format");
        } else if (password.length < 8) {
            setMessage("Password must contain at least 8 characters");
        } else {
            try {
                const response = await axios.post("http://localhost:8000/", {
                    email,
                    password
                });

                if (response.data === "exist") {
                    toast.success("Login Successful");
                    history("/", { state: { id: email } });
                } else if (response.data === "notexist") {
                    setMessage("User has not signed up");
                } else {
                    setMessage("Email or password wrong");
                }
            } catch (error) {
                setMessage("Something went wrong");
                console.log(error);
            }
        }

        setTimeout(() => {
            setMessage("");
        }, 3000);
    }

    return(
        <div className="container login">
            <h1>Login</h1>
            <form action="POST">
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br/>
                <button onClick={logIn}>Login</button>
                <p>{message}</p>
                <hr/>
                <Link to="/register">Register</Link>
            </form>
        </div>
    );
}