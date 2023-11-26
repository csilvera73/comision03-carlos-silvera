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
        default: "https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-64.png",
     },
     },
     {
        timestamps: true,
        versionKey: false,
     }
 )

 export default model ("User", userSchema)