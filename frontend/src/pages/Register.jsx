// Importamos de react-hook-form
import { useForm } from "react-hook-form"
/* import {useAuth} from "../context/Auth.Context" */


export const Register = () => {

    const {register, handleSubmit} = useForm()
    
    /* const {signup}= useAuth() */

    const onSubmit = handleSubmit(async(values) =>{
        // conexion al Servidor y enviar usuario
console.log(values);



    })

    return (
        <div className="flex h-screen items-center justify center">
            <div className="bg-zinc-900 max-w-md p-8 rounded-md">

            <form action="">
                <h1 className="text-3xl text-center font-semibold mb-5">Register</h1>
                <input className = "w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="text" placeholder="Username" {...Register("username",{required: true})} />
                <input className = "w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="email" placeholder="Email" {...Register("email",{required: true})} />
                <input className = "w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="password" placeholder="Password" {...Register("password",{required: true})} />
                <button onClick={onSubmit} className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white my-3">Registrarse</button>

            </form>

            </div>
        </div>

    )
}
