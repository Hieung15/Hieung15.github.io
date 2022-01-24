import '../style/main.css'
import {useNavigate} from 'react-router'
import {Canvas} from 'react-three-fiber'
import {Button} from 'react-bootstrap'
import styled, {keyframes} from 'styled-components'
import {motion} from 'framer-motion'


// const animation = keyframes `
//       0% {
//         border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
//         background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
//       } 
//       50% {
//         border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
//         background: linear-gradient(45deg, var(--third) 0%, var(--secondary) 100%);
//       }

//       100% {
//           border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
//           background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
//       } 
// `

// const Circle = styled.div`
//       animation-name: ${animation};
//       width:100px;
//       height:100px;
//       background-color: black;
// `
  


export default function Main(){

    const navigate = useNavigate();

    const handelToAboutMe = () =>{
      navigate('/aboutMe');
    }

    const handelToProject = () => {
      navigate("/project");
    }

    return(
      <div className='body'>
        <div className='title'>
          <div className='title-box' >
            <div className='textbox'>
              <div className='hallo'><p>Hello :) </p></div>
              <div className='name'><p>Ich bin Seonga Kim! </p></div>
              <div className='text'><p>Exploriere gerne mein Website </p></div>

              <div className="menu" >
                <div><motion.button whileHover = {{scale: 1.5}} whileTap={{color: 'white'}} onClick = {handelToAboutMe} className='buttons'>Über mich</motion.button></div>
                  <div ><motion.button whileHover = {{scale: 1.5}} whileTap={{color: 'white'}} onClick = {handelToProject} className='buttons'>Projekt</motion.button></div>
              </div>      
            </div>

            </div>
            
          </div>
      </div>
        

      
    );
}

