// Toda la lógica en el App
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/Auth.Context"
import { HomePage } from "./pages/HomePage"
import { Register } from "./pages/RegisterPage"
import { LoginPage } from "./pages/LoginPage"
import { PostPage } from "./pages/PostPage"
import { ProfilePage } from "./pages/ProfilePage"
import { PrivateRoutes } from "./routes/PrivateRoutes"
import { PostFormPage } from "./pages/PostFormPage"
import { PostProvider } from "./context/PostContext"

export const App = () => {
  return (
    
      /* Padre */
    <AuthProvider>
      <PostProvider>
        <Router>
          <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/login" element = {<LoginPage/>} />
            <Route path="/register" element = {<Register/>} />
          <Route element={<PrivateRoutes/>}>
            <Route path="/post" element = {<PostPage />} />
            <Route path="/add-post" element = {<PostFormPage />} />
            <Route path="/post/:id" element = {<PostFormPage />} />
            <Route path="/profile" element = {<ProfilePage />} />
          </Route>  
          </Routes>      
        </Router>
      </PostProvider>
    </AuthProvider>

  )
}
