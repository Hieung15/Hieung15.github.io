
import {useState} from 'react'
import video from "../../assets/video/Occhi.mp4"
import Image from 'react-bootstrap/Image'
import {Modal, Button} from 'react-bootstrap'
import occhi from '../../assets/img/project/occhi.png'
import '../../style/project.css'

const VideoModal = (props) =>{
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div>
                        Demo
                        </div>
                    
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className='video'>
                    <video width = "40%" controls>
                        <source src={video} type={'video/mp4'} />
                    </video>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>

        </>
    )
}



export default function Occhi(){

    const [modalShow, setModalShow] = useState(false);

    return(
        <>
        <div >
            <div className='main-box'>
                <div className='main-img'>
                    <Image src={occhi}/>
                </div>
                <div className='main-text'>
                    <p>Das ist Occhi!</p>
                </div>
                <div>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Demo
                    </Button>
                    <VideoModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>    

            <div className = 'content-box'>
                <p>„Occhi“ ist die App, die sich an Brillenträger und Menschen richtet, die virtuell Brillen anprobieren wollen. 
                    Eine Anprobe ist in Echtzeit möglich. Durch die eigens erstellten Brillenmodelle und Materialien werden dem Nutzer zahlreiche Kombinationsmöglichkeiten geboten.
                    Die App wurde mit der Programmiersprache Java in Android Studio entwickelt und ist nur für Android Geräte verfügbar. 
                    Um das Gesicht und die Lichtsituation zuverlässig erkennen zu können, wurde die von Google entwickelte Augmented Reality Programmierschnittstelle AR Core verwendet.
                    Meine Rolle : In dem Projekt habe ich mich um einen großen Teil des Rendering gekümmert. 
                    Dazu gehört die Aufgabe, mit Hilfe von Open GL die durch Blender erzeugte Materialien und Texturen an dem Brillenmodel einzusetzen und das Licht anzupassen. 

                </p>
            </div>
            

        
            
        </div>
        

            {/* <div>
                <video width = "400px" controls>
                    <source src={video} type={'video/mp4'} />
                </video>
            </div> */}
            
        </>
            
    );
    
}