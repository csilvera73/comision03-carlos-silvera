/* import axios from "axios" */
import axios from "../api/setCredentials"  // instance

export const getPostReq = () => axios.get("/post")

export const getPostByIdReq = (id) => axios.get(`/post/${id}`)

export const createPostReq = (task) => axios.post("/post", task)

export const updatePostReq = (id, task) => axios.put(`/post/${id}`, task)

export const deletePostReq = (id) => axios.delete(`/post/${id}`)