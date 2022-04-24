import React, {useState} from "react";
import axios from "axios";


export type User = {
    id: number
    name: string
    username: string
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setUsers(res.data)
            }).catch(error => {
            for(let key of Object.keys(error)) {
                console.log(key)
                console.log(error[key])
            }
        })
    }

    return (
        <>
            <button className="btn bg-teal-400" onClick={() => {getUsers()}}>get Users</button>
            {users.map((user:User) => (
                <div key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                </div>
            ))}
        </>
    )
}

export default UserList