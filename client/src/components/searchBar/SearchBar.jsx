import React, {useState}from 'react';
import {useDispatch} from 'react-redux'
import { getByName } from '../../actions/actions';
import Styles from '../searchBar/SearchBar'

const SearchBar = () => {
 const dispatch = useDispatch();
 const [name, setName] = useState('')
 
//  const [page404, setPage404] = useState(false)
    // const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(!name) {
            return alert('Fill out the search area')
        } else{
            dispatch(getByName(name));
            setName('');
            
            document.querySelector('#inputsearch').value= ''; 
        }
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }

    // const handleSearchValue = (e) => {
    // e.preventDefault()
    // setName(e.target.value);
    // console.log(name)
    // };

    // const handleSubmit = (e) =>{
    // e.preventDefault();
    // onSearch(name)
    // setName('');
    // };

    return (
    <>
    <div className='content'> 
      <div className='search'>
          <form>
                <input 
                id='inputsearch'
                onChange={e => handleSearch(e)}
                value={name} 
                type='text' 
                className='search-bar' 
                placeholder='Search Videogame...'
                />

            <button
            className='btn-submit' 
            type='submit' onClick={e => handleSubmit(e)}>
                <img className='defaultValue' src='#' alt='gamer'></img>
            </button>
          </form>
         </div>
       </div>    
    </>
);
}
export default SearchBar;


