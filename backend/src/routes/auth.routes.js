// Endpoints del servidor o API

import { Router } from "express"

// importamos los controllers de auth
import {register, login} from "../controllers/auth.controller.js"

export const routes = Router ()

// Rutas registro de Usuario
routes.post("/register", register)

// Rutas Login de Usuario
routes.post("/login",login )

//exporto por defecto
export default routes