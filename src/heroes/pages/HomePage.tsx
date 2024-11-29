import banner from '/banner.webp';
import './HomePage.css'

export const HomePage = () => {
    return(
        <div className="home-page">
            <img src={banner} alt="Banner heroes" width="700" />
            <h1>Heroes SPA!! 🦨🦨</h1>
            <h2>Search for your favorite hero.</h2>
        </div>
    )
}