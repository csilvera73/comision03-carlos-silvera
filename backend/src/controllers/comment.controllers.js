import Comment from "../models/comments.models.js"
import User from "../models/user.models.js"
import Post from "../models/post.models.js"

//
const checkUserExistence = async (userId, res) => {
    const existingUser = await User.findById(userId)
    if (!existingUser) {
      res.status(404).json({ error: "Usuario no encontrado" })
      return false
    }
    return true
  }

  export const getAllComment = async (req, res) => {
    try {
        const allcomment = await Comment.find({
            user:req.user.id
        }).populate("user")  // Muetra toda los datos en el thunder client
        res.status(200).json(allcomment)
    } catch (error) {
        return res.status(400).json({message: "Error al obtener todos los Comentarios" })
    }
}

export const getCommentById = async (req, res) => {
    const { id } = req.params
  
    try {
      const comment = await Comment.findById(id)
      if (!comment) {
        return res.status(404).json({ error: "Comentario no encontrado o ineexistente" })
      }
  
      res.status(200).json(comment)
    } catch (error) {
      res.status(400).json({ error: "Error al obtener el comentario" })
    }
  }

  export const deleteComment = async (req, res) => {
    const { id } = req.params
  
    try {
      const deletedComment = await Comment.findByIdAndDelete(id)
      if (!deletedComment) {
        return res.status(404).json({ error: "Comentario no encontrado" })
      }
      res.status(200).end()
    } catch (error) {
      res.status(400).json({ error: "Error al eliminar el comentario" })
    }
  }

  export const updateComment = async (req, res) => {
    const { id } = req.params
    const { description } = req.body
  
    try {
      const updatedComment = await Comment.findByIdAndUpdate(
        id,
        { description },
        { new: true }
      ).populate("user")
  
      if (!updatedComment) {
        return res.status(404).json({ error: "Comentario no encontrado" })
      }
  
      res.status(200).json(updatedComment)
    } catch (error) {
      res.status(400).json({ error: "Error al actualizar el comentario" })
    }
  }

  export const createComment = async (req, res) => {
    try {
      const { autor, description } = req.body;
      const postId = req.params.postId;
  
      // Verificar si existe el usuario
      const existingUser = await User.findById(autor);
      if (!existingUser) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // Verificar si el comentario existe
      const existingPost = await Post.findById(postId);
      if (!existingPost) {
        return res.status(404).json({ message: "Post no encontrado" });
      }
  
      // Crear comentario con lavinculación al comentario
      const newComment = new Comment({ autor, description, post: postId });
      
      // Guardar el comentario
      const commentSaved = await newComment.save();
  
      // Añadir el comentario en el array de comentarios para post
      existingPost.comments.push(commentSaved._id);
      
      // Guardar el comentario actualizado
      await existingPost.save();
  
      res.status(201).json(commentSaved);
    } catch (error) {
      console.error("Error al crear un nuevo comentario:", error);
      res.status(400).json({ message: "Error al crear un nuevo comentario", details: error.message });
    }
  };
  