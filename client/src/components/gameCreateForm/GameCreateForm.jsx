import React, {useState, useEffect}from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useParams} from "react-router-dom";
import Styles from '../gameCreateForm/GameCreateForm.module.css'

import {
    getByGenres,
    getGameId,
    postVideogame,
    updateVideogame,
} from '../../actions/actions';



//--CREATE NEW GAME--//
const GameCreateForm = () =>{
    const dispatch = useDispatch()
    const [validator, setValidator] = useState('')
    const {id} = useParams()
    const gameUpdate = useSelector((state) => state.copyVideogames)
    const genres = useSelector((state) => state.genres) 
    const [updated, setUpdated] = useState(false)
    // const navigate = useNavigate();
    let Platforms = [
    "PC",
    "PlayStation",
    "Xbox",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo",
    "PS Vita",
    "PSP",
    "Wii",
    "GameCube",
    "Game Boy",
    "SNES",
    "NES",
    "Commodore",
    "Atari",
    "Genesis",
    "SEGA",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",
    "PS5",
    "PS4",
    "PS3",
    "PS2",
    "PS1",
  ];

    useEffect(() =>{
         //get Genres & dispatch get games by id
        dispatch(getByGenres());
        id && dispatch(getGameId(id))
    }, [dispatch, id]) 


    // set the form state
    const [dataState, setDataState] = useState ({
    name: '',
    description: '',
    released: '',
    rating: '',
    background_image: '',
    platforms: [],
    genres: [],
    })
    
 //--HANDLERS--//
 //validations
 function handleSubmit(e){
     e.preventDefault(); //srting method without spaces
     if(!dataState.name.trim() && !dataState.description && !dataState.released.trim() && !dataState.rating && !dataState.background_image && !dataState.platforms.length && !dataState.genres.length){
        setValidator('OOopps! All the fields are required to create your game')
    } else if (!dataState.name.trim()){
        setValidator('Name required')
    } else if (!dataState.description){
        setValidator('Description required')
    } else if (!dataState.released.trim()){
       setValidator('Released date required')
    } else if (!dataState.rating.trim()){
        setValidator('Rating must be between 1 and 5')
    } else if (!dataState.platforms.length){
        setValidator('Select at least one platform')
    } else if (!dataState.genres.length){
        setValidator('Select at least one genre')
    } else if (!dataState.background_image){
        setValidator('Image URL required')
    } else {
        if(dataState.name){
            if(!id){
                dispatch(postVideogame(dataState))
                alert('Game created successfully')
            } else{
                dispatch(updateVideogame(id, dataState))
                alert('Game updated successfully');
            }
        }
        setValidator('');
        setDataState({
            name: '',
            description: '',
            released: '',
            rating: '',
            background_image: '',
            platforms: [],
            genres: [],
        })
        document.getElementById('form').reset();
    } 
}
    if(id && gameUpdate.name && !updated) {
        setDataState ({
            ...dataState,
            name: gameUpdate.name,
            description: gameUpdate.description,
            released: gameUpdate.released,
            rating: gameUpdate.rating,
            platforms: gameUpdate.platforms,
            background_image: gameUpdate.background_image,
            genres: gameUpdate.genres,
        })
        setDataState(!updated)
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setDataState({
            ...dataState,
            [e.target.name] : e.target.value,
        })
    };

    function handlePlatforms(e) {
        if(e.target.checked){
            setDataState({
                ...dataState,
                platforms: [...dataState.platforms, e.target.value]
            })
        } else if (!e.target.checked){
            setDataState({
                ...dataState,
                platforms: dataState.platforms.filter(p => p !== e.target.value)
            })
        }
    }
   function handleGenres(e) {
       console.log(e.target.value);
       if(e.target.checked){
           setDataState({
               ...dataState,
               genres: [...dataState.genres, e.target.value]
           })
       } else if (!e.target.checked) {
           setDataState({
               ...dataState,
               genres: dataState.genres.filter(g => g !== e.target.value)
           })
       }
   }

  return (
    
      <div>
        <NavLink to='/home'>
          <button className='btn-back'>Go Back</button>
        </NavLink>
        {id ? (
            <h1 className='update'>Update your game</h1>
        ) : (
          <h1 className='create'> Let's create your game<h4 className='create-sub'>Don't forget to fill all the fields</h4></h1>
          
        )}
        
        { validator && <div className='alert'> {validator}</div>}
        <form id='form' className={Styles.form}onSubmit={e => handleSubmit(e)}>
           <label>Name:</label>
                <input 
                className='form-input'
                type='text'
                placeholder='Videogame title' 
                name='name'
                value={dataState.name} 
                onChange={e => handleUpdate(e)}
                />
           
                <label>Description:</label>
                <input
                 className='form-input'
                type='text'
                placeholder='Description' 
                name='description'
                value={dataState.description} 
                onChange={e => handleUpdate(e)}
                />
                <label>Released date:</label>
               <input
                className='form-input'
                type='date'
                plaseholder='Released date' 
                name='released'
                value={dataState.released} 
                onChange={e => handleUpdate(e)}
                />
                <label>Rating:</label>
                <input
                className='form-input'
                type='range'
                max='5'
                min='1'
                name='rating'
                value={dataState.rating}
                onChange={e => handleUpdate(e)}
                />
                <p>{dataState.rating}</p>
                <label>Background Image:</label>
               <input
                className='form-input'
                type='url'
                placeholder='URL is required'
                name='background_image'
                value={dataState.background_image} 
                onChange={e => handleUpdate(e)}
                />
            <label className={Styles.platforms}>Platforms:</label>
                <div className={Styles.checkbox}>
                    {Platforms.map( e => (
                       
                    <div key={e} className='platforms-form'>
                         <input
            
                        className='check'
                        type='checkbox'
                        name='platforms'
                        value={e}
                        key={e} 
                        onClick={e => handlePlatforms(e)}
                        /> 
                        <p> {e} </p>
                    </div>
                    ))}
               </div>
            
             <div className='genres-form'>
                <label>Genres:</label>
                <div className='check-box'>
                    {genres.map(e => (
                        <div key={e.name}>
                            <input 
                            className='check'
                            type='checkbox'
                            name='genres'
                            value={e.name}
                            key={e.name} 
                            onClick={e => handleGenres(e)}
                            />
                           <p className='genres'>{e.name}</p>
                        </div> 
                    ))}
                    
                </div>
            </div>
            <div className='btn-create'>
                <button className='btn-submit' type='submit'> Create 🎮 </button>
            </div>
        </form>
      </div>
     
  );
};

export default GameCreateForm;