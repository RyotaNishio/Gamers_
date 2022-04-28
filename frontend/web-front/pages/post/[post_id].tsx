import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {PostCard} from "../components/post_card";
import CommentCard from "../components/comment_card";
import {Comment} from "../type";

const PostDetail = () => {
    const [post, setPost] = useState([])
    const router = useRouter()
    const {post_id} = router.query

    const apiUrl = 'http://localhost:8080/api/'
    useEffect(() => {
        axios.get(`${apiUrl}posts/${post_id}`)
            .then(res => {
                setPost(res.data)
            })
    }, [post_id])
    return (
        <div className="col-span-3 p-3 rounded-lg bg-cyan-300 mt-5 mx-32 h-min">
            <PostCard post={post}/>
            {post.post_comments && post.post_comments.map((commentId: string) => (
                    <div className="grid grid-cols-5" key={commentId}>
                        <div className="col-span-1">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="mx-auto mt-8 h-8 w-8 text-gray-600 origin-center rotate-180" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                            </svg>
                        </div>
                        <div className="col-span-4 col-start-2 mt-3 ">
                            <CommentCard commentId={commentId}/>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default PostDetail