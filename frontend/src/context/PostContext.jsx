import {createContext, useState} from "react"

const PostContext = createContext()

export const PostProvider = ({children}) => {
    
    const [post, setPost] = useState([])

    // 1) create Post

    const createPost = async (post) => {
        console.log(post);
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