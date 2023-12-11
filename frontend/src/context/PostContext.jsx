import {createContext, useState} from "react"
import {
    getPostReq, 
    getPostByIdReq, 
    createPostReq, 
    updatePostReq,
    deletePostReq, 
} from "../api/postAxios"

const PostContext = createContext()

export const PostProvider = ({children}) => {
    
    const [post, setPost] = useState([])

    // 1) create Post

    const createPost = async (post) => {
        /* console.log(post); */
        const res = await createPostReq (post)
    }

    return (
        < PostContext.Provider value={{
            post,
            createPost,
        }}>
            {children}
        </PostContext.Provider>
    )
}