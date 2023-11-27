// Endpoints del servidor o API

import { Router } from "express"

// importamos los controllers de auth
import {register, login, logout, profile} from "../controllers/auth.controller.js"

import {authRequired} from "../middlewares/validateToken.js"

export const routes = Router ()

// Rutas registro de Usuario
routes.post("/register", register)

// Rutas Login de Usuario
routes.post("/login",login )

// Ruta para el perfil del usuario
routes.get("/profile", authRequired, profile)

//exporto por defecto
export default routes