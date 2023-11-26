import mongoose from "mongoose"

import {settingDotEnvDB} from "../config/dotenv.js"
//desestrcturo
const {db} = settingDotEnvDB()


//coneccióna  la base de datos
export const connectMongo = async () => {
    try {
        await mongoose.connect(db.localhost)  //local o en la nube
        console.log("Base de Datos conectada exitosamente...");
        
    } catch (error) {
        console.log("Error al intentar conectarse a la Base de Datos", error);
        
    }
}
