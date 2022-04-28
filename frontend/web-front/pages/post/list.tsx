import React, {useEffect, useState} from "react";
import axios from "axios";
import {PostCard} from "../components/post_card";
import {Post} from "../type";


const PostList: React.FC = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/'
        axios.get(`${apiUrl}posts/`)
            .then(res => {
                setPosts(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <>
            {posts.map((post: Post) => (
                <div className="my-5 mx-32" key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </>
    );
}

export default PostList