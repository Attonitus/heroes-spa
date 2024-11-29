import { AuthContextProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {

    return(
        <AuthContextProvider>
            <AppRouter />
        </AuthContextProvider>
    )
}