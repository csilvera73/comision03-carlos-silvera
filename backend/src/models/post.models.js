import {Schema, model } from "mongoose"

//Instancia del Esquema
 const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    // Referencia a usuario
    user: { type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
     },
     // referencia a comments
    comments: [{ type: Schema.Types.ObjectId,
        ref: 'Comment' }],
    imageURL:{
        type: String,
        default: "https://img.freepik.com/foto-gratis/concepto-viaje-puntos-referencia_23-2149153256.jpg?size=626&ext=jpg",
     },
     },
     {
        timestamps: true,
        versionKey: false,
     }
 )

 export default model ("Post", postSchema)