import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//IMPORT MY COMPONENTS
import LandingPage  from './components/landingPg/LandingPg'
import Home  from './components/home/Home.jsx'
// import About from './components/about/About'
// import GameDetail from './components/gameDetail/GameDetail'
// import GameCreateForm from './components/gameCreateForm/gameForm'


function App() {
  return (
    
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path='/' element= {<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
     </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
