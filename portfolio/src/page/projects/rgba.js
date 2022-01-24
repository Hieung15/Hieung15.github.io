import { useState } from 'react'
import Image from 'react-bootstrap/Image'
import rgba from '../../assets/img/project/rgba.png'
import {Modal, Button} from 'react-bootstrap'


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
                        <source src={""} type={'video/mp4'} />
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

export default function RGBA(){

    const [modalShow, setModalShow] = useState(false);

    return(
        <>
        <div >
            <div className='main-box'>
                <div className='main-img'>

                    <Image src={rgba}/>
                </div>
                <div className='main-text'>
                    <p>Das ist RGBA!</p>
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
                <p>„RGBA: Run the Ground By Day And Night” ist ein Prototyp , 
                    womit ich UI Systeme in Unity besser verstehen und ausprobieren wollte. 
                    Die auf der Szene dargestellten Objekte habe ich mittels Blender erzeugt. 
                    Der Von Snapsshot Games Inc entwickleteter Colorpicker ist für Farbauswahl verwendet.
                    Der Name ist eine Anspielung auf die Farbcodes RGBA (Red, Green, Blue, Alpha), 
                    denn in diesem  Projekt geht es um Farben. Der User bzw. Spieler wählt einen Baum ausund ändert dessen Farbe, 
                    um dadurch das Feld zu verschönern. 
                </p>
            </div>
            

        
            
        </div>

            
        </>
            
    );
}