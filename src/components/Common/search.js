//import component
import { CiSearch } from 'react-icons/ci';

//import sass
import '../../Sass/component/search.sass';

const Search = ({ title, placeholderText }) => {
    return (
        <div className='search'>
            <h2>{title}</h2>
            <form>
                <CiSearch />
                <input type="search" placeholder={placeholderText} />
            </form>
        </div>
    )
}

export default Search;