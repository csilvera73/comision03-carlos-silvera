import NavbarPrivate from "../components/NavbarPrivate"
import {useForm} from "react-hook-form"
import {usePost} from "../context/PostContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"


export const PostFormPage = () => {

    const {register, handleSumit, setValue } = useForm ()

    const {post, createPost, getPostById, updatePost} = usePost()
    /* console.log(post);
    console.log(createPost) */;

//carga la aplicación lea ese parametro de la url
const params = useParams()
useEffect(() => {
  // console.log(params)
  async function loadPost() {
    if (params.id) {
      const post = await getPostById(params.id);
      //el setValue del useForm
      setValue("title", post.title);
      setValue("description", post.description);
    }
  }
  loadPost();
}, []);

const navigate = useNavigate();

    const onSubmit = handleSumit ((data)=> {
   /*    console.log(data)
      createPost(data)
      navigate("/post") */

      //B) en caso de que actualicemos tenemos que hacer la condicional
    if (params.id) {
      updatePost(params.id, data);
    } else {
      createPost(data);
    }
    navigate("/post");

    })
    
    return (
        <>
        <NavbarPrivate/>
        <h1>PostForm</h1>
        {/* Formulario para agregar posteos */}
        <div>
     
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="text"
            placeholder="Titulo"
            {...register("title")}
            autoFocus
          />
          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            rows="3"
            placeholder="Descripción"
            {...register("description")}
          ></textarea>

          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            rows="3"
            placeholder="Autor"
            {...register("author")}
          ></textarea>
          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            rows="3"
            placeholder="Cometarios"
            {...register("comments")}
          ></textarea>
          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            rows="3"
            placeholder="URL Image"
            {...register("imageURL")}
          ></textarea>
{/* 
          <label>Completado</label>
          <input type="checkbox" {...register("completed")} /> */}

          <button
            className="flex h-10 px-6 font-semibold rounded-md bg-green-900 text-white my-5"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
        </>
    )
}