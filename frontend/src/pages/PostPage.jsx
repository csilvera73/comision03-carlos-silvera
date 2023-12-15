import { useEffect } from "react"
import Navbar  from "../components/NavbarPrivate"
import {usePost} from "../context/PostContext"

import { PostCard } from "../components/PostCard"

export const PostPage = () => {
  /* const { user } = useAuth() */
  const {getAllPost , post } = usePost()

  // UseEffect trae las tareas cuando se ejecuta esta pagina
  useEffect(() => {
    getAllPost();
  }, []);

  if (post.length === 0)
    return (
      <>
        <Navbar />
        <h1>No Posts yet!</h1>
      </>
    )

  return (
    <>
      <Navbar />
      <h1>Post</h1>
      PRUEBA 1
      {JSON.stringify(user, null, 3)}

      {/* PRUEBA 2 */}
      
      {/* {post.map((pos, i) => (
        <div key={i}>
          <h1>{pos.title}</h1>
          <p>{pos.description}</p>
        </div>
      ))} */}

      {/* PRUEBA 3 CON POSTCARD */}

      {/* <div className="grid grid-cols-3 gap-2">
        {post.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div> */}
    </>
  )
}