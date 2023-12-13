import {useForm} from "react-hook-form"
// Permite lo que genere el padre, pueda ser usado por hijos, nietos, etc.
import {createContext, useContext, useEffect, useState} from "react"
// Las instancioas de axios
import {registerReq, loginReq, verifyToken} from "../api/auth"
import Cookies from "js-cookie"

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
            /* console.log(res.data) */
            setUser (res.data)
            setIsAuth(true)

        } catch (error) {
            /* console.log(error.response.data) */
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

    // Fin de sesión del usuario
    const signout = () => {
        Cookies.remove("token")
        setIsAuth(false)
        setUser(null)
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

    // Manejo de Cookies (almacenamiento)

    useEffect(()=>{   
        async function verifyLogin() {
            const cookie = Cookies.get()
        /* console.log(cookie);    */ 
        if(cookie.token){
            try {
                const res = await verifyToken(cookie.token)
                /* console.log(res); */
                if(res.data){
                    setIsAuth(true)
                    setUser(res.data)
                } else {
                    setIsAuth(false)
                    /* setUser(null) */
                }
            } catch (error) {
                /* console.log(error);  */      
                setIsAuth(false)
                setUser(null)
            }
        }
        }
        verifyLogin()

    }, [])

    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            signout,
            user,
            isAuth,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )

}