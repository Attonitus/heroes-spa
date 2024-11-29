import { useForm } from '../hooks/useForm';
import './InputSearch.css';

interface Props{
    onSearch : (search: string) => void;
}

export const InputSearch = ({onSearch}: Props) => {

    const {form, onInputChange, onResetForm} = useForm({
        search: ''
    });

    const {search} = form;

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(search.trim().length <= 1) return;
        onSearch(search);
        onResetForm();
    }

    return(
        <form className='form-search' onSubmit={onSubmit}>
            <input className='input' 
            type="search" placeholder="Search a hero!"
            onInput={onInputChange}
            value={search}
            name="search" />
            <button className="btn-primary" type="submit">Search</button>
        </form>
    )
}