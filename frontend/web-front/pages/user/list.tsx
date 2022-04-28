import React, {useEffect, useState} from "react";
import axios from "axios";
import {User} from "../type";


const UserList: React.FC = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/'
        axios.get(`${apiUrl}users/`)
            .then(res => {
                setUsers(res.data)
                console.log(res.data)
            })
    }, [setUsers])

    return (
        <>
            {users.map((user:User) => (
                <div key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.username}</p>
                    <p>{user.bio}</p>
                    <img src="../images/l_e_others_500.png" alt=""/>
                </div>
            ))}
        </>
    )
}

export default UserList