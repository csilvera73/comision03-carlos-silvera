//importamos express
import express from "express"
// importamos morgan para el detalle de las peticiones
import morgan from "morgan"
// importamos cors
import cors from "cors"
// importamos la dependencia cookie-parser
import cookieParser from "cookie-parser"
// importamos para la conección a la BD
import {connectMongo} from "./database/db.js"
// importamos las rutas
import {routes}  from "./routes/auth.routes.js"

//creamos el servidor y lo exportamos para usar en el index
export const app = express()
//conectamos a la Base de Datos
connectMongo()

app.use(morgan("dev"))  //tiny, dev, combined, short, common, etc
app.use(cookieParser())
app.use(express.json())
app.use(cors())

/* app.use("/", (req, res) => {
    res.send("Bienvenidos")
}) */

app.use(routes)
