import {createContext} from "react"

export const AuthContext = createContext ()

export const AuthProvider = ({children}) =>{
    
    const [user, setUser]=useState(null) // Estados de los usuario

    return (
        <AuthContext.Provider value={}>
            {children}

        </AuthContext.Provider>
    )
}