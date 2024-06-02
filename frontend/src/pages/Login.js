import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    async function logIn(e) {
        e.preventDefault();

        setMessage('Loading...');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            setMessage('Please fill in all fields');
        } else if (!emailRegex.test(email)) {
            setMessage('Incorrect email format');
        } else if (password.length < 8) {
            setMessage('Password must contain at least 8 characters');
        } else {
            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                    email,
                    password
                });

                if (response.data.message === 'Login successful') {
                    toast.success('Login Successful');
                    handleLogin(response.data.firstname);
                    navigate('/', { state: { id: email } });
                } else if (response.data.message === 'User not found') {
                    setMessage('User has not signed up');
                } else {
                    setMessage('Email or password wrong');
                }
            } catch (error) {
                if (error.response.status === 401) {
                    setMessage('Email or password wrong');
                } else {
                    setMessage('Something went wrong');
                    console.error(error);
                }
            }
        }
        setTimeout(() => {
            setMessage('');
        }, 3000);
    }

    return (
        <div className="container login" style={{ backgroundImage: "url(/images/Bg.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",}}>
            <h1>Login</h1>
            <form onSubmit={logIn}>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit">Login</button>
                <p>{message}</p>
                <hr />
                <Link to="/register">I don't have an account</Link>
            </form>
        </div>
    );
}