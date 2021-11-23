import { NavLink } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@mui/material'
import LogIn from '../Login/Login'
import useToken from '../../Hook/useToken'

import './Header.scss'

function Header() {
    let [styleBtn, setStyleBtn] = useState('none')
    let [styleLogin, setStyleLogin] = useState('inline-block')

    let [token, setToken] = useToken()

    let elLogin = useRef()

    useEffect(() => {
        if (token === 'kirish mumkin') {
            setStyleBtn('inline-block')
        } else {
            setStyleBtn('none')
        }
    }, [token])

    useEffect(() => {
        if (token === 'kirish mumkin') {
            setStyleLogin('none')
        } else {
            setStyleLogin('inline-block')
        }
    }, [token])


    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__list'>
                    <NavLink className='header__link' to='/'>Users</NavLink>
                    <NavLink className='header__link' to='/posts'>Posts</NavLink>
                    <NavLink className='header__link' to='/update'>Update</NavLink>
                </div>
                <div>
                    <NavLink style={{ display: styleLogin }} className='header__link' to='/login'>
                        LogIn
                    </NavLink>
                    <Button style={{ display: styleBtn }} variant="outlined" color="error" onClick={() => {
                        setToken(false)
                    }}>LogOut</Button>
                </div>
                <div ref={elLogin} className='header__login'>
                    <LogIn />
                </div>
            </nav>
        </header>
    )
}

export default Header