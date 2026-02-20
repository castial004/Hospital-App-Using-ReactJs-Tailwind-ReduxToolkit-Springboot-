import { Link, useNavigate } from "react-router-dom";
import { Container } from "./Container";
import Logo from "./Logo";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux'
import { logout as logoutAction } from '../store/AuthSlice'
const Header = () => {
    const navigate = useNavigate();
    const authStatus = useSelector((state)=>state.auth.status)
    const dispatch = useDispatch()
    const navItems = [
        { name: "Home", path: "/",active:authStatus},
        { name: "Login", path: "/login",active:!authStatus},
        { name: "Signup", path: "/signup",active:!authStatus },
        { name: "Appointment", path: "/appointment",active:authStatus },
        { name: "Insurance", path: "/insurance",active:authStatus}
    ]
    function handleLogout(){
        dispatch(logoutAction())
        navigate("/")
    }
    return (
        <header className="bg-gray-700 fixed top-0 w-full z-50">
            <Container>
                    <nav className="flex w-full items-center">
                        <div className="w-10">
                            <Logo className="rounded-full"/>
                        </div>
                        <div className="ml-auto ">
                            {navItems.map(item =>{
                                    if(item.active==true){
                                        return(
                                            <button key={item.name} className="bg-gray-600  rounded-3xl mx-1 my-3 hover:bg-gray-300 hover:cursor-pointer px-2 py-1" onClick={()=>navigate(item.path)}>
                                                {item.name}
                                            </button>
                                        )   
                                    }
                                }
                            )}
                            {authStatus && <button onClick={handleLogout} className={`bg-red-600  rounded-3xl mx-1 my-3 hover:bg-red-300 hover:cursor-pointer px-2 py-1`}>Logout</button>}
                        </div>
                    </nav>
                
            </Container>
        </header>
    )
}
export default Header