// Endpoints del servidor o API

import { Router } from "express"

// importamos los controllers de auth
import {
    register, 
    login, 
    logout, 
    profile
} from "../controllers/auth.controller.js"

import {authRequired} from "../middlewares/validateToken.js"

import {validateLogin, validateRegister, handleErrorValidations} from "../middlewares/validateAttibute.js"

export const routes = Router ()

// Rutas registro de Usuario
routes.post("/register", validateRegister, handleErrorValidations,register)

// Rutas Login de Usuario
routes.post("/login",validateRegister, handleErrorValidations,login )

//Rutas para el Logout
routes.post("/logout", logout)

// Ruta para el perfil del usuario
routes.get("/profile", authRequired, profile)

//exporto por defecto
export default routes