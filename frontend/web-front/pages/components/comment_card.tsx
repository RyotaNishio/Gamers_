import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import {Comment} from "../type";

const CommentCard = (props: {commentId: string}) => {
    const {commentId} = props
    const [comment, setComment] = useState([])
    const [user, setUser] = useState([])

    const apiUrl = 'http://localhost:8080/api/'
    useEffect(() => {
        axios.get(`${apiUrl}comments/${commentId}`)
            .then(res => {
                setComment(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get(`${apiUrl}users/${comment.user}`)
            .then(res => {
                setUser(res.data)
                console.log(res.data)
            })
    }, [comment])
    return (
        <>
            <div className="grid grid-cols-6 bg-cyan-200 rounded-lg px-2">
                <div className="col-span-1 my-2 ml-7">
                    {user.img &&
                      <Link href={`../user/${user.id}`}>
                        <img src={user.img} alt=""
                             className="h-16 w-16 object-cover object-top rounded-full"/>
                      </Link>
                    }
                    <p className="ml-6 mt-3 font-mono text-2xl">{user.username}</p>
                </div>
                <div className="col-span-5 my-4 mx-3 grid grid-cols-10">
                    <div className="col-span-9 my-3 grid grid-rows-6">
                        <div className="row-span-5">
                            {comment.body}
                        </div>
                    </div>

                    <div className="col-span-1">

                        {/*<Link href="#">*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 text-gray-600"
                                 viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                      clip-rule="evenodd"/>
                            </svg>
                        {/*</Link>*/}

                        <div className="grid grid-cols-2 my-3">
                            <div className="col-span-1">
                                {/*<Link href="#">*/}
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="h-5 w-5 align-items-center mx-auto text-pink-600"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="h-5 w-5 align-items-center mx-auto text-gray-600"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                {/*</Link>*/}
                            </div>
                            <div className="col-span-1">
                                <span className="text-align-center">{}</span>
                            </div>

                            {/*<Link href="#">*/}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 mt-2 text-gray-600"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentCard