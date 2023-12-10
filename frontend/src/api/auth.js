// Usar Axios para solicitudes al servidor (no fetch)

import axios from "axios"

//desestructuro
const API = "http://localhost:3000"

// Registrarse
export const registerReq = (user)=> axios.post(`${API}/register`, user)

// Loguearse
export const loginReq = (user)=> axios.post(`${API}/login`, user)