import {Suspense} from 'react'
import { Card, Container, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router";
import '../style/projects.css'
import '../style/style.css'
import Mjolnir from './projects/mjolnir'
import {Canvas} from 'react-three-fiber'


function importProjekt(r) {
    var projekts = {};
    r.keys().map((item, index) => { projekts[item.replace('./', '')] = r(item); });
    return projekts;
}



const pages = [
    {title: 'Occhi', img: 'occhi.png', size: '20%', skill1: 'Java', skill2:'Android Studio', skill3: 'ARCore', skill4: 'OpenGL'},
    {title: 'fairify', img: 'fairify.png', size: '60%', skill1: 'React', skill2:'Three JS', skill3: 'html/Css', },
    {title: 'RGBA', img: 'rgba.png', size: '100%', skill1: 'Unity 3D', skill2:'Blender'},
    {title: 'Billy', img: 'Billy.png', size: '100%', skill1: 'Unity 3D', skill2:'Blender'},
    {title: 'Drache', img: 'dragon.png', size: '100%', skill1:'Blender'},
    {title: 'Mjolnir', img: 'Mjolni1.png', size: '100%', skill1:'Blender'},
];


export default function Project(){
    const projekts = importProjekt(require.context('../assets/img/project', false, /\.(png|jpe?g|svg)$/));
    
    const navigate = useNavigate();
    function handeltoLink(page){
        navigate('/project/' + page)
    }

    return(
        
        <div className="background">

            <div className="project-box">
                <div className="title">
                    Projekt
                </div>
                
                <div className='projects'>
                    <div className='card-box'>
                    {pages.map((page)=>(
                        <Card className="card">
                            <div className="img-box">
                                <Card.Img variant="top" src={projekts[page.img]} style={{width: page.size}}/>
                            </div>
                            
                            <Card.Body>
                                <Card.Title>{page.title}</Card.Title>
                                <Card.Text>
                                {page.title}
                                <div><Badge>{page.skill1}</Badge> <Badge>{page.skill2}</Badge> <Badge>{page.skill3}</Badge> <Badge>{page.skill4}</Badge></div>
                                
                                </Card.Text>
                                <Button variant="primary" onClick={() => {handeltoLink(page.title)}} >Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))};

                    </div>
                </div>
                


            </div>
        </div>
       
    )
}