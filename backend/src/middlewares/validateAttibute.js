import { body, validationResult } from "express-validator"

// Validación del Register

export const validateRegister = [
 /*  body("username")
    .notEmpty()
    .withMessage("Username no puede estar vacío")
    .isLength({ min: 6 })
    .withMessage("El Username debe contener al menos 6 caractéres válidos"), */

  body("email").isEmail().withMessage("Por favor ingrese un mail válido"),

  body("password")
    .notEmpty()
    .withMessage("El Password es  carácter obligatorio")
    .isLength({ min: 6 })
    .withMessage("Longitud mínima del password es de 6 caractéres"),
];

// Validación del Login

export const validateLogin = [
  body("email").isEmail().withMessage("Por favor ingrese un mail válido"),

  body("password")
/*     .notEmpty()
    .withMessage("El Password es carácter obligatorio") */
    .isLength({ min: 6 })
    .withMessage("Longitud mínima del password es de 6 caractéres"),
];

// Validación del Error

export const handleErrorValidations = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json([error.errors[0].msg]);
    // return res.status(400).json({ message: "Error en la validación", error });
  }
  next();
};