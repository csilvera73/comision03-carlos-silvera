import NavbarPrivate from "../components/NavbarPrivate"
import {useAuth} from "../context/Auth.Context"

export const PostPage = () => {
    const {user} = useAuth ()
    return (
        <>
            <NavbarPrivate/>
            <h1>Post Page</h1>
            {JSON.stringify(user, null, 3)}
        </>
        )
    }