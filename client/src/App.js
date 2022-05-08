import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//IMPORT MY COMPONENTS
import LandingPage  from './components/landingPg/LandingPg'
import Home  from './components/home/Home.jsx'
// import About from './components/about/About'
import GameDetail from './components/gameDetail/GameDetail'
import GameCreateForm from './components/gameCreateForm/GameCreateForm'


function App() {
  return (
    
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path='/' element= {<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/gameCreateForm' element={<GameCreateForm/>} />
        <Route path='/home/:id' element={<GameDetail/>} />
         <Route path='/updateVideogame/:id' element={<GameCreateForm/>} />
         {/* <Route path='/home/about' element={<About/>} /> */}
     </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
