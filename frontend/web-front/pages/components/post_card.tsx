import {Post} from "../type";
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";

export const PostCard = (props: { post: Post }) => {
    const {post} = props
    const [user, setUser] = useState([])

    const apiUrl = 'http://localhost:8080/api/'
    useEffect(() => {
        axios.get(`${apiUrl}users/${post.user}`)
            .then(res => {
                setUser(res.data)
            })
    }, [post])
    return (
        <>
            <div className="grid grid-cols-6 bg-cyan-200 rounded-lg px-2">
                <div className="col-span-1 my-2 ml-7">
                    <Link href={`../user/${user.id}`}>
                        <div>
                            <img src={user.img} alt=""
                                 className="h-16 w-16 object-cover object-top rounded-full"/>
                            <p className="ml-6 mt-3 font-mono text-2xl">{user.username}</p>
                        </div>
                    </Link>
                </div>
                <div className="col-span-4 grid grid-cols-10">
                    <div className="col-span-9 my-5 grid grid-rows-6 pr-3">
                        <Link href={`../post/${post.id}`}>
                            <div className="row-span-5">
                                {post.body}
                            </div>
                        </Link>
                    </div>

                    <div className="col-span-1 ml-2 my-3">
                        <div className="flex pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="h-6 w-6 align-items-center text-gray-600"
                                 fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                            </svg>
                            {/*{post.post_comments.length}*/}
                        </div>
                        <div className="flex pl-3 my-1">
                            {/*{% if request.user in post.liked.all %}*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clip-rule="evenodd"/>
                            </svg>
                            {/*{% else %}*/}
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="h-6 w-6 align-items-center mx-auto text-gray-600"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                            <span className="text-align-center">{post.liked}</span>
                        </div>
                        {/*{% if post.user == request.user %}*/}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3 text-gray-600"
                             viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3 mt-2 text-gray-600"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </div>
                </div>
                <div className="col-span-1 my-2 justify-items-center">
                    {post.img &&
                      <img src={post.img} alt=""
                           className="h-32 w-32 object-cover object-top rounded-lg mx-auto"/>
                    }
                </div>
            </div>
        </>
    )
}