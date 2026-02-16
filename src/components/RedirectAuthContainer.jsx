import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const RedirectAuthContainer = ({children,authentication = true}) => {
    const [loding,setLoading] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector((state)=>state.auth.status)
    useEffect(()=>{
        //pages which requires login
        if(authentication &&  !authStatus){
            navigate("/login")
        } 
        // when u are logged in and type /login then you should be be able to access i
        else if(!authentication && authStatus) {
            navigate('/')
        }
        else{
            setLoading(false)
        }
    },[authStatus,authentication,navigate])
  return loding?<h1>Loading....</h1>:children
}
export default RedirectAuthContainer
