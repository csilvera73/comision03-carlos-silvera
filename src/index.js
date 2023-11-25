// importamos app desde app.js
import { app } from "./app.js"
// importamos settingsDotEnvPort desde dotenv.js
import {settingDotEnvPort} from "./config/dotenv.js"
//desestructuramos settingDotEnvPort
const {port} = settingDotEnvPort ()

app.listen(port, console.log(`Servidor ejecutandose en puerto ${port}`));
