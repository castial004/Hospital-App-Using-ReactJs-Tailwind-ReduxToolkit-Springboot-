import { React, useState } from 'react'
import authService from '../Springboot/Auth'
import Input from '../components/Input'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as loginAction } from '../store/AuthSlice'
const Login = () => {
    const [username, setUsername] = useState("")
    // const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
const handleSubmit = async (e) => {
    
    e.preventDefault()
    setError("")

    try {
        const dbUser = await authService.login({ username, password })

        if (dbUser) {
            dispatch(loginAction(dbUser))
            navigate("/")
        }

    } catch (error) {
        setError(error.message)
    }
}
    return (
        <div className='flex items-center justify-center bg-gray-400 h-screen'>
            <form onSubmit={handleSubmit} className='bg-gray-200 px-10 py-10 rounded-xl relative'>
                <div className='mb-5 mx-51'>
                    <h1 className='text-3xl mb-3'><b>Login to your account</b></h1>
                    <h2>Don't have an account ? <span className='text-green-400 hover:text-green-600'><Link to="/signup">Signup</Link></span></h2>
                </div>
                <div className='flex justify-center items-center text-xl'>
                    {error && (<p className='text-red-500'>{error}</p>)}
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

export default Login
