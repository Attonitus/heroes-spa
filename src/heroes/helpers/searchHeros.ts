import { heroes } from "../data/heroes"


export const searchHeros = (search = '') => {
    search = search.toLocaleLowerCase().trim();

    if(search.length === 0) return [];
    
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(search));
}