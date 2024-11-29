import { useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById";
import'./HeroPage.css';
import { useMemo } from "react";

export const HeroPage = () => { 

    const navigate = useNavigate();

    const params = useParams();
    if(!params?.heroId){
        return (
            <h1>Error: ID must be allowed!</h1>
        )
    }
    const { heroId } = params;
    const hero = useMemo(() => getHeroeById(heroId), [heroId]); 

    if(!hero){
        return (
        <h1>Error: Hero with ID {heroId} not exist</h1>
    )}

    const {alter_ego, characters, first_appearance, publisher, superhero, id} = hero;

    const onLeft = () => {
        navigate(-1);
    }

    return(
        <div className="hero-page animate__animated animate__bounceInLeft">
            <button className="btn-primary left" onClick={onLeft}>
                <i className="ri-arrow-left-line"></i>
            </button>
            <div className="page-img">
                <img src={`/assets/${id}.jpg`} alt={`Image of ${superhero}`} />
            </div>
            <div className="page-info">
                <h2>{superhero}</h2>
                <h3>Alter ego: {alter_ego}</h3>
                <h3>Publisher: {publisher}</h3>
                <p>Characters: {characters}</p>
                <p>First appearance: {first_appearance}</p>
            </div>
        </div>
    )
}