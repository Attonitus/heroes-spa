import { useMemo } from "react";
import { getHeroesByPublisher, publisherType } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";
import './HeroList.css';

interface Props{
    publisher: publisherType
}

export const HeroList = ({publisher}: Props) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

    return(
        <ul className="cards-list">
            {
                heroes.map(heroe => (
                    <HeroCard key={heroe.id}  hero={heroe} />
                ))
            }
        </ul>
    )
}