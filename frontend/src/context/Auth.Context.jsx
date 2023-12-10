// Permite lo que genere el padre, pueda ser usado por hijos, nietos, etc.
import {createContext, useContext, useEffect, useState} from "react"
import {registerReq, loginReq} from "../api/auth"

// Creación del Contexto
export const AuthContext = createContext()

//hooks personalizado
export const useAuth = () =>{
    const context = useContext (AuthContext)
    if(!context) throw new Error ("Error en el contexto del usuario")
    return context
}

// Para englobar a los componentes hijos
export const AuthProvider = ({children}) => {
    
    // Manejamos los estados del usuario
    const [user, setUser] = useState(null)

    // Boolean para la Autenticación
    const [isAuth, setIsAuth]  = useState (false)

    // Manejo de los Estados de Errores
    const [errors, setErrors] = useState([])

    // Registro del usuario
    const signup = async(user) => {
        try {
            const res = await registerReq(user)
            console.log(res.data)
            setUser (res.data)
            setIsAuth(true)

        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data)
            
        }
    }

    // Inicio sesión del usuario
    const signin = async(user) => {
        try {
            const res = await loginReq(user)
            setUser(res.data)
            setIsAuth(true)
            
        } catch (error) {
            /* console.log(error) */
            setErrors(error.response.data)
        }
    }

// Manejo de mensajes de errores para que desaparezcan

    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout (()=> {
                setErrors([])
            }, 5000 )
            return ()=> clearTimeout(timer)
        }
    }, [errors])

    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            isAuth,
            user,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )

}