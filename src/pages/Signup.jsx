import React, { useState } from 'react'
import Input from '../components/Input'
import authService from '../Springboot/Auth'
import { useNavigate,Link } from 'react-router-dom'
const Signup = () => {
    const [username, setUsername] = useState("")
    // const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
    e.preventDefault()
    setError("") 

    try {
        const dbUser = await authService.createAccount({ username, password })

        if (dbUser) {
            setMessage("Creaed Account sucessfully: you will we redirected to login page")
            setTimeout(()=>{
                navigate("/login")
            },8000)    
        }

    } catch (error) {
        setError(error.message || "Please enter valid credentials")
    }
}
    return (
        <div className='flex items-center justify-center bg-gray-400 h-screen'>
            <form onSubmit={handleSubmit} className='bg-gray-200 px-10 py-10 rounded-xl'>
                <div className='mb-5 mx-29 text-center'>
                    <h1 className='text-3xl mb-3'><b>Sign in to create your new account</b></h1>
                    <h2>Already have an account ? <span className='text-green-400 hover:text-green-600'><Link to="/Login">Login</Link></span></h2>
                </div>
                <div className='flex justify-center items-center text-xl'>
                    {error && (<p className='text-red-500'>{error}</p>)}
                    {message && (<p className='text-green-500'>{message}</p>)}
                </div>
                <Input name="username" label="UserName: " placeholder="your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {/* <Input name="email" label="UserName: " placeholder="your email" value={username}/> */}
                <Input name="password" label="Passowrd: " placeholder="your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='mx-40'>
                    <button className='bg-green-400 hover:bg-green-300 rounded w-full py-4' type='submit'>Submit</button>
                </div>

            </form>

        </div>
    )
}

export default Signup
