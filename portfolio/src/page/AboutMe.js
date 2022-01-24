import { Container, Nav } from "react-bootstrap";
import '../style/aboutMe.css'
import '../style/style.css'
import {useInView} from 'react-intersection-observer'
import{AnimatePresence, motion, useAnimation} from 'framer-motion'
import {useEffect} from 'react'


function importIcons(r) {
  var icons = {};
  r.keys().map((item, index) => { icons[item.replace('./', '')] = r(item); });
  return icons;
}


const container={
  show:{
    transition:{
      staggerChildren: 0.35
    }
  },
};

const item ={
  hidden:{
    opacity: 0,
    y: 50
  },
  show:{
    opacity: 1,
    y: 0,
    transition: {
      ease:[0.6, 0.01, -0.05, 0.09],
      duration: 1.6
    }
  },
  exit:{
    opacity: 0,
    y: -50,
    transition: {
      ease: 'easeIn',
      duration: 0.8
    }
  }
}



export default function AboutMe(){
    const icons = importIcons(require.context('../assets/img/icons', false, /\.(png|jpe?g|svg)$/));

    const {ref, inView} = useInView({
      threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(()=> {

      if(inView){
        animation.start('show');
      }
      else{
        animation.start('hidden')
        
      }

    }, [inView])

    return(
      <div className="meContainer">
 
          <Nav 
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/home" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/project">Projekt</Nav.Link>
            </Nav.Item>
          </Nav>

        
        
        <div className="meBox">
          <motion.div className="aboutMe" variants={container} initial='hidden' animate="show" exit='exit' ref ={ref}>
            <Container>
            <motion.div className="titel-box"> <h1>Ich bin...</h1> </motion.div>
            <motion.div variants={item}>
               

            ich bin am 15.10.1991 in Südkorea geboren. Seit 2016 lebe ich <br/>in Deutschland und zurzeit studiere ich im Bachelorstudiengang Medientechnologie <br/>
            an der TH Köln. Mein Schwerpunkt liegt in der Anwendungs- und Gameentwicklung, wobei<br/> ich gerne Java und C# als Programmierungssprache und Unity 3D verwende.<br/>
            In meiner Freizeit zeichne und male ich gerne. Manchmal spiele ich auch Games.
            </motion.div>

            </Container>
          </motion.div>

          <AnimatePresence>
          <div  className="ausbildung">
          <Container>
            <div><h1>Ausbildung</h1></div>
            <motion.div variants ={container} initial='hidden' animate={animation} exit="exit">
              <motion.div variants={item} ref = {ref}  >
                <p>[ 03/2010 - 02/2015 ] <br/> Korea University of Technology and Education,Cheonan, Südkorea <br/>
                    Bachelorstudium Industrial Design and Engineering  <br/>
                    - Schwerpunkt: 3D-Modelling<br/>
                    - Abschlussnote: 2,2</p>
              </motion.div>
              <motion.div variants={item} ref = {ref} > 
                <p>[ 02/2015 - 10/2017 ] <br/> Vorbereitung der Deutschprüfung und des Studiums<br/> - TestDaF(Test Deutsch als Fremdsprache): TDN 4</p>
              </motion.div>
              <motion.div variants={item} ref = {ref} >
                <p>[ Seit 10/2017 ] <br/> Technische Hochschule Köln <br/> Bachelorstudium  Medientechnologie <br/> - Schwerpunkt: Anwendungsentwicklung <br/> -  Geplanter Abschluss: Sommer 2022 </p>
              </motion.div>
            </motion.div>
            
          </Container>
          </div>
          </AnimatePresence>
          <div className="">
            <Container>
              <div><h1>Skills</h1></div>
              <div>
                <img src={icons['word.png']} alt='word'/>
              </div>
              <div>
                <img src={icons['pp.png']} alt='power point'/>
              </div>
              <div>
                <img src={icons['excel.png']} alt='excel'/>
              </div>
              <div>
                <img src={icons['photoshop.png']} alt='photoshop'/>
              </div>
              <div>
                <img src={icons['illustrator.png']} alt='illustrator'/>
              </div>
              <div>
                <img src={icons['xd.png']} alt='Xd'/>
              </div>
              <div>
                <img src={icons['unity.png']} alt='unity 3d'/>
              </div>
              <div>
                <img src={icons['blender.png']} alt='blender'/>
              </div>
            </Container>
          </div>
        </div>

  
      </div>  
      
    );
}