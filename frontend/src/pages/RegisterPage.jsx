// Importamos de react-hook-form
import { useForm } from "react-hook-form"
/* import {registerReq} from "../api/auth" */
import {useAuth} from "../context/Auth.Context"
import {Link, useNavigate} from "react-router-dom"
import { useEffect } from "react"
import NavbarPublic from "../components/NavbarPublic"

export const Register = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    
    const {signup, isAuth, errors:registerErrors }= useAuth()

    const Navigate = useNavigate()

    useEffect (()=>{
        if (isAuth) Navigate("/post")
    },[isAuth])

    const onSubmit = handleSubmit(async(values) =>{
        // conexion al Servidor y enviar usuario
        /* console.log(values)
        const res = await registerReq(values)
        console.log(res); */
        signup(values)
    })

    return (
        <>
            <NavbarPublic/>
        <div className="flex h-screen items-center justify-center">
            <div className="bg-zinc-900 max-w-md p-8 rounded-md">

            <form action="">
                <h1 className="text-3xl text-center font-semibold mb-5">Registrarse</h1>
                {registerErrors.map((err, i) => (
                    <div className="bg-red-800 text-white" key={i}>{err}</div>
                    ))}
                <input className = "w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="text" placeholder="Username" {...register("username",{required: true})} />
                {errors.username && (<p className="text-red-400">Username es obligatorio</p>)}
                <input className = "w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="email" placeholder="Email" {...register("email",{required: true})} />
                {errors.email && (<p className="text-red-400">Email es obligatorio</p>)}
                <input className = "w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="password" placeholder="Password" {...register("password",{required: true})} />
                {errors.password && (<p className="text-red-400">Password es obligatorio</p>)}
                <button onClick={onSubmit} className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white my-3">Registrarse</button>
            </form>
            <p className="flex justify-between mt-10">
                ¿Ya esta registrado?
                    <Link to={"/login"} className="px-3 font-semibold rounded-md bg-green-500 text-white">Loguearse
                    </Link>
                </p>
            </div>
        </div>

        </>
    )
}
