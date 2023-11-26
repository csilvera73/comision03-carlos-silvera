//Autenticación del Usuario
import User from "../models/user.models.js"  // exportado x defecto, se importa sin llaves

// Libreria brypt para hash contraseñas
import bcrypt from "bcrypt"


// Registro de Usuario
export const register = async (req, res) => {
    const {username, password, email, avatarurl} = req.body;
    
    try {
        // Hashing Password bcrypt
        const passwordHash = await bcrypt.hash(password, 10) // default 10 saltos

        const newUser = new User({
            username, 
            password: passwordHash, 
            email, 
            avatarurl
        })
        const userSaved = await newUser.save()
        res.status(200).json(userSaved)

    } catch (error) {
        res.status(500).json({message:"Error al registrar un usuario", error})
        
    }
}


// Login de Usuario
export const login = async (req, res) => {}