import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register(){
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [message, setMessage] = useState("");
    const history=useNavigate();

    async function submit(e){
        e.preventDefault();

        setMessage("Loading...");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstname || !lastname || !email || !password || !confirm) {
            setMessage("Please fill in all fields");
        } else if (!emailRegex.test(email)) {
            setMessage("Incorrect email format");
        } else if (password !== confirm) {
            setMessage("Passwords do not match");
        } else {
            try {
                const response = await axios.post("http://localhost:8000/signup", {
                    email,
                    password
                });
                
                if (response.data === "exist") {
                    setMessage("User already exists");
                } else if (response.data === "notexist") {
                    toast.success("Registration Successful");
                    history("/home", { state: { id: email } });
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
        <div className="container register">
            <h1>Register</h1>
            <form action="POST">
                <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/><br/>
                <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/><br/>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br/>
                <input type="password" placeholder="Confirm password" onChange={(e) => setConfirm(e.target.value)}/><br/>
                <button onClick={submit}>Submit</button>
                <p>{message}</p>
                <hr/>
                <Link to="/login">Already I'm an user</Link>
            </form>
        </div>
    );
}