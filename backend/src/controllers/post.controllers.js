import Post from "../models/post.models.js"

export const getAllPost = async (req, res) => {
    try {
        const allpost = await Post.find({
            user:req.user.id
        }).populate("user")  // Muestra toda los datos en el thunder client
        res.status(200).json(allpost)
    } catch (error) {
        return res.status(400).json({message: "Error al buscar todos los Post" })
    }
}

export const getPostById = async (req, res) => {
    const {id} = req.params

    try {
        const postFound = await Post.findById(id)
        if (!postFound) return res.status(404).json({messaje: "Post no encontrado" })
        res.status(200).json(postFound)
    } catch (error) {
        return res.status(400).json({message: "Error al buscar el Post" })
    }
}

export const createPost = async (req, res) => {
    const {title,description, Comments, imageURL} = req.body
    try {
        const newPost = new Post ({
            title,
            description,
            user: req.user.id, // Usuario del Post
            comments,
            imageURL

        })

        const postSaved = await newPost.save()

        //FALTA COMO SE CREA ARRAY DE COMENTARIO!

        // Agregar el ID del nuevo post al array 'posts' del usuario
        /* user.post.push(newPost:_id)
        await user.save() */


        res.status(200).json(postSaved)
    } catch (error) {
        return res.status(400).json({message: "Error al crear el Post" })
        
    }
}

export const updatePost = async (req, res) => {

    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("user")
        if (!updatePost)return res.status(404).json({messaje: "Post no encontrado"})
        res.status(200).json(updatePost)

    } catch (error) {
        return res.status(400).json({message: "Error al actualizar el Post" })
    }
}

export const deletePost = async (req, res) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id)

        if (!deletePost) return res.status(404).json({messaje: "Post no encontrado"}) 
        res.status(200).json({message: "Post Eliminado"})
    } catch (error) {
        return res.status(400).json({message: "Error al eliminar el Post" })
    }
}