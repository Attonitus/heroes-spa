import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MarvelPage } from "../pages/MarvelPage"
import { DCPage } from "../pages/DCPage"
import { Navbar } from "../../public/components/Navbar"
import { SearchPage } from "../pages/SearchPage"
import { HeroPage } from "../pages/HeroPage"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="/dc" element={<DCPage />} />
                    <Route path="/search" element={<SearchPage />} />

                    <Route path="/hero/:heroId" element={<HeroPage />} />

                </Routes>
            </div>
        
        </>
    )
}