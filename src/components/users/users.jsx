import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

//  MUI
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import { Edit } from "@mui/icons-material";

//Token
import useToken from "../../Hook/useToken";


// SASS
import './users.scss'


function Users() {

    let [token] = useToken()

    let [del, setDel] = useState(0)
    let [styleIcon, setStyleIcon] = useState('none')

    let userDelete = useRef()

    useEffect(()=>{
        if(token === 'kirish mumkin'){
            setStyleIcon('inline-block')
        }else{
            setStyleIcon('none')
        }
    })

    // fetch Users
    let [users, setUser] = useState([])
    useEffect(() => {
        fetch('https://backendsss.herokuapp.com/users')
            .then(result => result.json())
            .then(data => setUser(data))
    }, [])

    //delete
    useEffect(() => {
        fetch(`https://backendsss.herokuapp.com/users/${del}`, {
            method: "DELETE",
        })
    }, [del])

    return (
        <section className='user'>
            <div className='container'>
                <ul className='user__list'>
                    {
                        users.map((item, i) => {
                            return (
                                <li className='user__item' key={i}>
                                    <h2 className='user__title'>{item.name} <br /> {item.surname}</h2>
                                    <a className='user__email' href={`mailto:${item.email}`}>Email: {item.email}</a>
                                    <p className='user__address'>Address: {item.address}</p>
                                    <p className='user__id'>Id: {item.id}</p>
                                    <div className='user__box'>
                                        <Tooltip title="Delete">
                                            <IconButton style={{display: styleIcon}} ref={userDelete} onClick={() => {
                                                setDel(item.id)
                                            }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <NavLink to='/update'>
                                            <Tooltip title="Edit">
                                                <IconButton style={{display: styleIcon}} ref={userDelete} onClick={() => {
                                                    setDel(item.id);
                                                }}>
                                                    <Edit />
                                                </IconButton>
                                            </Tooltip>
                                        </NavLink>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Users