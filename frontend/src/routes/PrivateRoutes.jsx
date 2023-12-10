// Manejo de Rutas para usuarios autenticados solamente
import {useAuth} from "../context/Auth.Context"
import {Navigate, Outlet} from "react-router-dom"

export const PrivateRoutes = () => {

    const {isAuth} = useAuth()
    
    if (!isAuth) return <Navigate to="/login"/>
    
    return <Outlet/>

}