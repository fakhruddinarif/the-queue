import { useState } from 'react';
import FieldForm from "../components/components.jsx";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Submitted', { username, password });
    }
    return (
        <section className="flex flex-wrap justify-center items-center w-fit py-8 px-4 gap-4 shadow-md rounded-lg">
            <div className="w-full flex flex-row justify-center items-center gap-2">
                <img src="/public/vite.svg" alt="login" className="w-12 h-12"/>
                <h1 className="text-2xl font-bold">The Queue</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full min-w-52 gap-4">
                <FieldForm onChange={(e) => setUsername(e.target.value)} label="Username" type="text" value={username}/>
                <FieldForm onChange={(e) => setPassword(e.target.value)} label="Password" type="password" value={password}/>
                <button type="submit" className="w-full py-3 bg-blue-600 border-blue-600 border rounded-lg text-base font-semibold text-white">Login</button>
            </form>
        </section>
    )
}

export default Login;