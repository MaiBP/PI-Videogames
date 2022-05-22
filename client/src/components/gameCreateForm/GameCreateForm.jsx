import React, {useState, useEffect}from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useParams} from "react-router-dom";
import Style from '../gameCreateForm/GameCreateForm.module.css'


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
     e.preventDefault(); //trim() string method without spaces
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
        console.log(e.target.value);
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
          <div className={Style.btnAlign}>
                <NavLink to='/home'>
                <button className={Style.backBtn}>
                <span className={Style.buttonTop}>BACK HOME</span></button>
                </NavLink>
           </div>
                {id ? (
                    <div className={Style.titleAling}><h2 className='update'>UPDATE GAME</h2>
                    </div>
                
             ) : (
            <div className={Style.titleAling}><h2 className='create'>CREATE YOUR GAME!</h2></div>
             
        )}
       
<div className={Style.signupSection}>

    
     <form id='form' className={Style.signupForm}
        onSubmit={e => handleSubmit(e)}>
        
        <ul className={Style.noBullet}>
        <li>
        <label>NAME:</label>
        <input
        required 
        type='text'
        maxlength='15'
        className={Style.inputFields}  
        name='name' 
        placeholder='Game Name'
        value={dataState.name} 
        onChange={e => handleUpdate(e)}/>
       </li>
       <li>
        <label>DESCRIPTION:</label>
        <input 
        required
        type='text'
        maxlength='50' 
        className={Style.inputFields}  
        name='description' 
        placeholder='Description' 
        value={dataState.description} 
        onChange={e => handleUpdate(e)}/>
       </li>
       <li>
        <label>RELEASED DATE:</label>
        <input 
        required
        type='date' 
        className={Style.inputFields} 
        name='released' 
        placeholder='Released date' 
        value={dataState.released} 
        onChange={e => handleUpdate(e)}/>
       </li>
      
       <li>
        <label>IMAGE URL:</label>
        <input 
        required
        type='url' 
        className={Style.inputFields}  
        placeholder='URL image'
        name='background_image' 
        value={dataState.background_image} 
        onChange={e => handleUpdate(e)}/>
       </li>
      <li>
        <label>RATING:{dataState.rating}</label>
        <input 
        required
        type='range' 
        className={Style.inputFields} 
        max='5'
        min='1'
        name='rating'
        value={dataState.rating}
        onChange={e => handleUpdate(e)}/> 
      </li>
      <li>
      <label className={Style.container} id='genres'> GENRES:</label>
        <div className={Style.align}> 
        {genres.map(e => (
               <div key={e.name}>
                    <input 
                    className={Style.input}
                    type="checkbox" 
                    name='genres' 
                    key={e.name} 
                    value={e.name} 
                    onClick={e => handleGenres(e)}/>
                    <span  className={Style.nameGenre} name='genres'>{e.name}</span>
                </div>
           
            ))}
        </div>
     </li>
     <li>
       <label className={Style.container}>  PLATFORMS: </label>
       <div className={Style.align}>
            {Platforms.map( e => (
                <div key={e} className='platforms-form'>
                <input
                className={Style.input}
                type="checkbox"
                name='platforms'
                value={e}
                key={e} 
                onClick={e => handlePlatforms(e)}
                /> 
                <span className={Style.nameGenre} name='platforms'> {e} </span>
                     </div>
             ))}
     </div>
    </li> 
     {validator && 
        <div className={Style.titleAling}>
            <h3 className={Style.alert}>{validator}</h3>
            
        </div>}  
    <li>
       <button className={Style.createBtn} type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>CREATE</button>
     </li>   
    </ul>
  </form>
</div>
</div>
  );
};

export default GameCreateForm;





