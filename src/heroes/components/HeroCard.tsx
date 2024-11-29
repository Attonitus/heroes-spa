import { Link } from "react-router-dom";
import { Hero } from "../data/heroes"
import './HeroCard.css'

interface Props{
    hero: Hero;
}

export const HeroCard = ({hero}: Props) => {

    const {alter_ego, characters, id, superhero, first_appearance} = hero;

    return(
        <div className="card animate__animated animate__fadeIn">
            <div className="card-img">
                <img src={`/assets/${id}.jpg`} alt={`Image of ${superhero}`} />
            </div>
            <div className="card-info">
                <h3>{superhero}</h3>
                <p>{alter_ego}</p>
                {
                    alter_ego !== characters && <p>{characters}</p>
                }
                <p className="text-gray">{first_appearance}</p>
                <Link to={`/hero/${hero.id}`} className="link">See more...</Link>
            </div>
        </div>
    )
}