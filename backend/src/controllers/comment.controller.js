import Comment from "../models/comments.models.js"

export const getAllComment = async (req, res) => {
    try {
        const allcomment = await Comment.find({
            user:req.user.id
        }).populate("user")  // Muestra toda los datos en el thunder client
        res.status(200).json(allcomment)
    } catch (error) {
        return res.status(400).json({message: "Error al buscar todos los Comentarios del Usuario" })
    }
}

export const getCommentById = async (req, res) => {
    const {id} = req.params

    try {
        const commentFound = await Comment.findById(id)
        if (!commentFound) return res.status(404).json({messaje: "Comentario no encontrado" })
        res.status(200).json(commentFound)
    } catch (error) {
        return res.status(400).json({message: "Error al buscar el Comentario del Usuario" })
    }
}

export const createComment = async (req, res) => {
    const {description} = req.body
    try {
        const newComment = new Comment ({
            user: req.user.id, // Usuario del Post
            description,
        })

        const commentSaved = await newComment.save()

        //ESTUDIAR COMO EL COMENTARIO SE RELACIONA CON EL POST


        res.status(200).json(commentSaved)
    } catch (error) {
        return res.status(400).json({message: "Error al crear el Comentario" })
        
    }
}

export const updateComment = async (req, res) => {

    try {
        const updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("user")
        if (!updateComment)return res.status(404).json({messaje: "Comentario no encontrado"})
        res.status(200).json(updateComment)

    } catch (error) {
        return res.status(400).json({message: "Error al actualizar el Comentario" })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const deleteComment = await Comment.findByIdAndDelete(req.params.id)

        if (!deleteComment) return res.status(404).json({messaje: "Comentario no encontrado"}) 
        res.status(200).json({message: "Comentario Eliminado"})
    } catch (error) {
        return res.status(400).json({message: "Error al eliminar el Comentario" })
    }
}
