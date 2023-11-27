//Autenticación del Usuario
import User from "../models/user.models.js"  // exportado x defecto, se importa sin llaves

// Libreria brypt para hash contraseñas
import bcrypt from "bcrypt"

//libreria jsonwebtoken para Token
//import jwt from "jsonwebtoken"

// importamos el cretate access token
import {createAccessToken} from "../middlewares/jwt.validator.js"

/* import { json } from "express"; */


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

        // Generación del Token

       /*  // Token: forma 1
        jwt.sign({id: userSaved._id},
            "SecretKey",
            {expiresIn: "1h"},
            (err, token) =>{
                if(err) console.log(err);
                res.cookie("token", token)
                res.json({userSaved})
            }
            ) */

        // Token: forma 2 con promise

        const token = await createAccessToken ({id: userSaved._id})
        res.cookie("token", token)
        res.json({
            message: "Usuario registrado con exito", 
            id: userSaved.id,
            username:userSaved.username,
            email:userSaved.email,
            avatar: userSaved.avatarurl,
         })

        /* res.status(200).json(userSaved) */

    } catch (error) {
        res.status(500).json({message:"Error al registrar un usuario", error})
        
    }
}

// Login de Usuario
export const login = async (req, res) => {

    const {email, password} = req.body

    try {
        const userFound = await User.findOne({email})
        if (!userFound) 
            return res.status(400).json({message: "Usuario no encontrado o registrado"})

        const match = await bcrypt.compare(password, userFound.password)
        if (!match) 
            return res.status(400).json({message: "Contraseña incorrecta"})

        // Generacion del Token
        const token = await createAccessToken({ id: userFound._id });
        res.cookie("token", token);
        res.json({
            message: "¡Bienvenido!",
            username: userFound.username,
            email: userFound.email,
        });

    } catch (error) {
        res.status(500).json({ message: "Error al loguearse", error });
    }

}

//Logout de usuario

export const logout = async (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    return res.status(200).json({ message: "Hasta Pronto!" });
  };
  
  export const profile = async (req, res) => {
    try {
      const userFound = await User.findById(req.user.id);
      if (!userFound)
        return res.status(400).json({ message: "Usuario no encontrado" });
  
      res.json({
        message: "Perfil",
        username: userFound.username,
        email: userFound.email,
      });
    } catch (error) {
      res.status(500).json({ message: "Error en el login", error });
    }
  };