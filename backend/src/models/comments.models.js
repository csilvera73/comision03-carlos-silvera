import {Schema, model } from "mongoose"

const commentSchema = new Schema({
    // Referencia a Usuario
    user: { type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
     },
    description: {
        type: String, 
        required: true,
     },
     post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
      },

  });

  export default model ("Comments", commentSchema)