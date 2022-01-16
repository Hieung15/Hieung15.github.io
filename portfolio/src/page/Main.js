import {Button} from 'react-bootstrap'
import '../assets/style/style.css'
import {useNavigate} from 'react-router'


export default function Main(){

    const navigate = useNavigate();

    const handelToAboutMe = () =>{
      navigate('/AboutMe');
    }
    return(
      <div className='body'>
        
        <div className='titel'>
          <div className='titel-box'>
            <div className='hallo'><p>Hello :) </p></div>
            <div className='name'><p>Ich bin Seonga Kim! </p></div>
            <div className='name'><p>Exploriere gerne mein Website </p></div>
            
            <div className="nav" >
          <div><Button onClick = {handelToAboutMe}>Über mich</Button></div>
          <div><p>Projekt</p></div>
        </div>
          </div>
          
        </div>

        
        
  

      </div>  

      
    );
}

