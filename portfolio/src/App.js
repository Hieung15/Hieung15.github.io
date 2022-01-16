import react from 'react'
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import AboutMe from './page/AboutMe';
import Main from './page/Main'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/AboutMe' element={<AboutMe/>}/>  
       
      </Routes>
    </Router>
    
  );
}

export default App;
