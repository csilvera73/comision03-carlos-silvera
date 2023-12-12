import {createContext, useContext, useState} from "react"
import {
    getPostReq, 
    getPostByIdReq, 
    createPostReq, 
    updatePostReq,
    deletePostReq, 
} from "../api/postAxios"

const PostContext = createContext()

export const usePost = () => {
    const context = useContext(PostContext);
    if (!context) throw new Error("Error en el contexto de los Posts")
    return context
  };

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