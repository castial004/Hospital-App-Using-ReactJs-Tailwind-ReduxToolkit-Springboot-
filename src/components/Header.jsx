import { Link, useNavigate } from "react-router-dom";
import { Container } from "./Container";
import Logo from "./Logo";
import {useSelector} from "react-redux";
export const Header = () => {
    const navigate = useNavigate();
    const authStatus = useSelector((state)=>state.auth.status)
    const navItems = [
        { name: "Home", path: "/",active:authStatus},
        { name: "Login", path: "/login",active:!authStatus},
        { name: "Signup", path: "/signup",active:!authStatus },
        { name: "Appointment", path: "/appointment",active:authStatus },
        { name: "Insurance", path: "/insurance",active:authStatus}
    ]
    return (
        <header className="bg-gray-700">
            <Container>
                    <nav className="flex w-full items-center">
                        <div className="w-10">
                            <Logo />
                        </div>
                        <div className="ml-auto">
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
                        </div>
                    </nav>
                
            </Container>
        </header>
    )
}