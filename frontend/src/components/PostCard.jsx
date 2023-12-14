import { usePost } from "../context/PostContext"
import { Link } from "react-router-dom"

export const PostCard = ({ post }) => {
  const { deletePost } = usePost()
  //   console.log(post)
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-semibold text-white">{post.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => {
              //   console.log(post._id);
              deletePost(post._id);
            }}
          >
            Eliminar
          </button>
          <Link to={`/post/${post._id}`}>Editar</Link>
        </div>
      </header>
      <p className="">{post.description}</p>
      <p className="text-2xl font-bold">
        {new Date(post.date).toLocaleDateString()}
      </p>
    </div>
  );
};