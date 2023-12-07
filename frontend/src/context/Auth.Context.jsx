// Permite lo que genere el padre, pueda ser usado por hijos, nietos, etc.
import {createContext, useContext, useState} from "react"
import {registerReq} from "../api/auth"

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

    // Registro del usuario
    const signup = async(user) => {
        try {
            const res = await registerReq(user)
            console.log(res.data)
            setUser (res.data)
        } catch (error) {
            console.log(error.response.data);
            
        }
    }

    return(
        <AuthContext.Provider value={{
            signup,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )

}