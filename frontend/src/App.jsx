// Toda la lógica en el App
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/Auth.Context"
import { HomePage } from "./pages/HomePage"
import { Register } from "./pages/RegisterPage"
import { Login } from "./pages/LoginPage"
import { PostPage } from "./pages/PostPage"
import { ProfilePage } from "./pages/ProfilePage"
import { PrivateRoutes } from "./routes/PrivateRoutes"
import { PostFormPage } from "./pages/PostFormPage"

export const App = () => {
  return (
    
      /* Padre */
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element = {<HomePage/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/register" element = {<Register/>} />
        <Route element={<PrivateRoutes/>}>
          <Route path="/post" element = {<PostPage />} />
          <Route path="/add-post" element = {<PostFormPage />} />
          <Route path="/post/:id" element = {<PostFormPage />} />
          <Route path="/profile" element = {<ProfilePage />} />
        </Route>  
        </Routes>      
      </Router>
    </AuthProvider>

  )
}
