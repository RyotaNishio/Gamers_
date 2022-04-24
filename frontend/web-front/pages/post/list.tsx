import React, {useState} from "react";
import axios from "axios";


export type Post = {
    id: string
    body: string
    user: string
}

const PostList: React.FC = () => {
    const [posts, setPosts] = useState([])
    const getPost = async () => {
        axios.get("http://localhost:8080/api/posts")
            .then(res => {
                setPosts(res.data)
            }).catch(error => {
                for(let key of Object.keys(error)) {
                    console.log(key)
                    console.log(error[key])
                }
        })
    }

    return (
        <>
            <button className="btn bg-teal-400" onClick={() => {getPost()}}>get posts</button>
            {posts.map((post:Post) => (
                <>
                    <p>{post.id}</p>
                    <p>{post.user}</p>
                    <p>{post.body}</p>
                </>
            ))}
        </>
    )
}

export default PostList