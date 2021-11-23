import { useState } from "react";

//MUI
import { Button, TextField } from "@mui/material"
import { Send } from "@mui/icons-material"

//SASS
import '../update/update.scss'


function Post() {
    let [userName, setUserName] = useState()
    let [userSurname, setUserSurname] = useState()
    let [userEmail, setUserEmail] = useState()
    let [userAddress, setUserAddress] = useState()


    function postUsers(e) {
        e.preventDefault()

        if (userName.current.value.length >= 3 && userSurname.current.value.length >= 3 && userEmail.current.value.length >= 6 && userAddress.current.value.length >= 3) {
            fetch('https://backendsss.herokuapp.com/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    surname: userSurname,
                    email: userEmail,
                    address: userAddress
                })
            })
        }

    }

    return (
        <div className='update__wrapper'>
            <form className='update__form' onSubmit={postUsers}>
                <h1 className='update__title'>POST</h1>
                <TextField className='update__input' id="outlined-basic" label="Name*" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
                <TextField className='update__input' id="outlined-basic" label="Surname*" variant="outlined" onChange={(e) => setUserSurname(e.target.value)} />
                <TextField className='update__input' id="outlined-basic" label="Email*" variant="outlined" onChange={(e) => setUserEmail(e.target.value)} />
                <TextField className='update__input' id="outlined-basic" label="Address*" variant="outlined" onChange={(e) => setUserAddress(e.target.value)} />
                <Button className='update__btn' variant="contained" endIcon={<Send />} type='Submit'>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Post