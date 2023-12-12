import NavbarPrivate from "../components/NavbarPrivate"
import {useForm} from "react-hook-form"
import {usePost} from "../context/PostContext"


export const PostFormPage = () => {

    const {register, handleSumit} = useForm ()

    const {createPost} = usePost()

    const onSubmit = handleSumit ((data)=> {

        createPost(data)

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

          <label>Completado</label>
          <input type="checkbox" {...register("completed")} />

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