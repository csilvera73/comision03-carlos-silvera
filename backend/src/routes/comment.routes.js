import {Router} from "express"
import { 
    createComment,
    getCommentById,
    getAllComment,
    updateComment,
    deleteComment 
} from "../controllers/comment.controller.js"
import { authRequired } from "../middlewares/validateToken.js"

const comments = Router ()

comments.get("/comment", authRequired, getAllComment )
comments.get("/comment/:id", authRequired, getCommentById)
comments.post("/comment", authRequired, createComment)
comments.put("/comment/:id", authRequired, updateComment)
comments.delete("/comment/:id", authRequired, deleteComment)

export default comments