//importamos express
import express from "express"
// importamos morgan para el detalle de las peticiones
import morgan from "morgan"
// importamos cors
import cors from "cors"

//creamos el servidor y lo exportamos para usar en el index
export const app = express()

app.use(morgan("dev"))  //tiny, dev, combined, short, common, etc

app.use("/", (req, res) => {
    res.send("Bienvenidos")
})


