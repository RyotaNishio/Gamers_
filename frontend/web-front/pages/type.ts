export type Post = {
    id: string
    body: string
    user: User
    img: HTMLImageElement
    post_comments: Array<Comment>
}

export type User = {
    id: string
    email: string
    username: string
    bio: string
    img: string
    birthday: Date
    user_posts: Array<Post>
}

export type Comment = {
    id: string
    body: string
    user: User
    post: Post
}