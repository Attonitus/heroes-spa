import { useLocation, useNavigate } from "react-router-dom";
import { InputSearch } from "../components/InputSearch"
import { Message } from "../components/Message";
import queryString from "query-string";

import './SearchPage.css';
import { searchHeros } from "../helpers/searchHeros";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ""}: any = queryString.parse(location.search);

    const heroes = searchHeros(q);

    const onSubmitSearch = (search: string) => {
        navigate(`?q=${search}`);
    }

    return(
        <>
            <h1>Search</h1>
            <div className="container-search">
                <div className="box-search">
                    <InputSearch onSearch={onSubmitSearch} />
                </div>
                <div className="results-search">
                    <h2>Results</h2>
                    {
                        (q === '') ? (<Message className="info">Search a hero</Message>)
                        : (heroes.length === 0) && <Message className="error">No hero with {q}</Message>
                    }
                    <div className="heroes-search">
                        {
                            heroes.map( hero => (
                                <HeroCard key={hero.id} hero={hero} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}