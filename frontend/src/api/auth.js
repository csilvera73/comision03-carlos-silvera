// Usar Axios para solicitudes al servidor (no fetch)

/* import axios from "axios" */
import axios from "./setCredentials"  // instance

//desestructuro
/* const API = "http://localhost:3000" */

// Registrarse
/* export const registerReq = (user)=> axios.post(`${API}/register`, user) */
export const registerReq = (user)=> axios.post(`/register`, user)

// Loguearse
/* export const loginReq = (user)=> axios.post(`${API}/login`, user) */
export const loginReq = (user)=> axios.post(`/login`, user)

// Verifica el token desde el Backend

export   const verifyToken = () => axios.get("/verifyToken")