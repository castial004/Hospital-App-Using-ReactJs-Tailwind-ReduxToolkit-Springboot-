import { Navigate, useNavigate } from "react-router-dom"

const Logo = ({ className = "" }) => {
  const navigate = useNavigate()
  return (
    <img
      onClick={()=>navigate("/")}
      src="https://www.bing.com/th/id/OIP.NTLQIjOH20bTTxJFHt-ZsgHaHa?w=218&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.4&pid=3.1&rm=2"
      alt="Logo"
      className={`object-contain ${className} hover:cursor-pointer`}
    />
  )
}

export default Logo
