import {Schema, model } from "mongoose"

//Instancia del Esquema
 const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    avatarurl:{
        type: String,
        default: "../public/avatar.jpg",
     },
     },
     {
        timestamps: true,
        versionKey: false,
     }
 )

 export default model ("User", userSchema)