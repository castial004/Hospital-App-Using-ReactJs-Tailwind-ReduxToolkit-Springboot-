import {React,useState} from 'react'
import authService from '../Springboot/Auth'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
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
        try {
            const dbUser = await authService.login({username, password})
            if (dbUser) {
                dispatch(loginAction(dbUser))
                navigate("/")
            }
        } catch(error){
            setError(error)
        }
        
    }
    return (
        <div className='flex items-center justify-center'>
            <form onSubmit={handleSubmit}>
                <Input name="username" label="UserName: " placeholder="your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                {/* <Input name="email" label="UserName: " placeholder="your email" value={username}/> */}
                <Input name="password" label="Passowrd: " placeholder="your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className='w-full bg-green-400 hover:bg-green-200 rounded-2xl' type='submit'>Submit</button>
            </form>
            <div className='flex justify-center items-center'>
                {error && (<p className='text-red-500'>{error}</p>)}
            </div>
        </div>
    )
}

export default Login
