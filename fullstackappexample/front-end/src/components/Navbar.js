import React from 'react'
import {useNavigate} from 'react-router-dom'




export default function Navbar() {
    const navigate = useNavigate()
    const changeNav = () => {
        navigate('/')
    }

    return (
    <button onClick={() => changeNav()}>books</button>
  )
}
