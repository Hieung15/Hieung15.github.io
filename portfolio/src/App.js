import react from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutMe from './page/AboutMe';
import Main from './page/Main'
import Projects from './page/Projects'
import Occhi from './page/projects/occhi'
import Fairify from './page/projects/fairify'
import Rgba from './page/projects/rgba'
import Billy from './page/projects/billy'
import Mjolnir from './page/projects/mjolnir'
import Dragon from './page/projects/dragon'
import Project from './page/Project';




function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route  path='/home' element={<Main/>}/>
        <Route  path='/aboutMe' element={<AboutMe/>}/>  
        <Route  path='/project' element={<Projects/>}/>
        <Route  path='/project/:title' element={<Project/>} />
        <Route  path='/project/occhi' element={<Occhi/>}/>
        <Route  path='/project/fairify' element={<Fairify/>}/>
        <Route  path='/project/rgba' element={<Rgba/>}/>
        <Route  path='/project/Billy' element={<Billy/>}/>
        <Route  path='/project/mjolnir' element={<Mjolnir/>}/>
        <Route  path='/project/dragon' element={<Dragon/>}/>
          
       
      </Routes>
    </Router>
    
  );
}

export default App;
