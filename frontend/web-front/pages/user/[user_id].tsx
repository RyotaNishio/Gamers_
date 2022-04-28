import {UserCard} from "../components/user_card";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import {PostCard} from "../components/post_card";
import {Post, User} from "../type";

const UserDetail = () => {
    const router = useRouter()
    const {user_id} = router.query


    const [user, setUser] = useState([])

    const apiUrl = 'http://localhost:8080/api/'
    useEffect(() => {
        axios.get(`${apiUrl}users/${user_id}`)
            .then(res => {
                setUser(res.data)
            })
    }, [user_id])



    return (
        <>
            <div className="grid grid-cols-4 my-10 mx-16">
                <UserCard user={user}/>
                <div className="col-span-3 p-3 rounded-lg bg-cyan-300 ml-4 h-min">
                    <p className="ml-3 mt-1 text-3xl text-gray-600">Posts</p>
                    {user.user_posts && user.user_posts.map((post: Post) => (
                        <div className="my-5 mx-4">
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserDetail