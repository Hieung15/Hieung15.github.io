import { useState } from 'react'
import Image from 'react-bootstrap/Image'
import billy from '../../assets/img/project/Billy.png'
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


export default function Billy(){
    const [modalShow, setModalShow] = useState(false);

    return(
        <>
        <div >
            <div className='main-box'>
                <div className='main-img'>

                    <Image src={billy}/>
                </div>
                <div className='main-text'>
                    <p>Das ist Billy!</p>
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
                <p>„Billy“ ist ein Prototyp für ein Puzzle Game, das auf Billard  basiert. 
                    In diesem Game wurden physikalische Kenntnisse angewandt wie die Gesetze der Schwerkraft und der Reibung. 
                    Spielbeschreibung: Der Spieler schlägt mit einem Billardqueue einen Ball. 
                    Jeder Ball hat eine eigene Nummer und wenn ein Ball einen anderen mit der gleichen Nummer trifft, 
                    dann werden die beiden zusammengezogen und werden zu einem größeren Ball. Wenn dieser ein bestimmtes Niveau erreicht, verschwindet er.
                    Wenn ein solcher Ball eine bestimmte Grenze überschreitet, verändert er seine Farbe in rot und das Spiel ist in 10 Sekunden beendet, wenn der Ball nicht weitergerollt. 
                </p>
            </div>
            

        
            
        </div>

            
        </>
            
    );
}