import {Schema, model } from "mongoose"

const commentSchema = new Schema({
    // Referencia a Usuario
    author: { 
        type: Schema.Types.ObjectId, 
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
    },
    {
        timestamps: true,
        versionKey: false,
    }

  );

  export default model ("Comments", commentSchema)