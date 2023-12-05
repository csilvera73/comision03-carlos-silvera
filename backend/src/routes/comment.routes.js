import { Router } from "express"
import { authRequired } from "../middlewares/validateToken.js"
import {
    getAllComment,
    getCommentById,
    createComment,
    updateComment,
    deleteComment
} from "../controllers/comment.controllers.js"

const routes = Router()

routes.get('/comments', getAllComment)
routes.get('/comments/:id', getCommentById)
routes.post('/comments/:postId', authRequired, createComment)  //duda
routes.put('/comments/:id', authRequired, updateComment)
routes.delete('/comments/:id', authRequired, deleteComment)

export default routes;