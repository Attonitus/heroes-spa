import { heroes } from "../data/heroes";

export type publisherType = "DC Comics" | "Marvel Comics"

export const getHeroesByPublisher = ( publisher: publisherType) => {
    return heroes.filter( heroe => heroe.publisher === publisher);
}