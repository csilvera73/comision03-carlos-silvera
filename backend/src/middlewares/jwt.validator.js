//libreria jsonwebtoken para Token
import jwt from "jsonwebtoken"

import {settingDotEnvSecret} from "../config/dotenv.js"

//desestructuro
const {secret} = settingDotEnvSecret ()

export const createAccessToken = (payload) => {
    return new Promise ((resolve, reject) => {        
        jwt.sign(payload, secret, {expiresIn: "1h"}, (err, token) =>{
            err ? reject(err) : resolve (token)
               /* if(err) reject(err);
               resolve(token) */
        })

    })
}
