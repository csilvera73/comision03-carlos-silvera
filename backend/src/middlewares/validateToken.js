import jwt from "jsonwebtoken";
import { settingDotEnvSecret } from "../config/dotenv.js";

const { secret } = settingDotEnvSecret();

export const authRequired = (req, res, next) => {
  
  /* console.log(req.headers.cookie) */

  const { token } = req.cookies;
  /* console.log(token) */

  if (!token)
    return res
      .status(401)
      .json({ message: "Autorización Denegada (sin Token)" });

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    /* console.log(user) */

    req.user = user;
  });

  next();
};