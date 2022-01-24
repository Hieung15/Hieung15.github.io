import Image from 'react-bootstrap/Image'
import fairify from '../../assets/img/project/fairify.png'

export default function Fairify(){
    return(
        <>
        <div >
            <div className='main-box'>
                <div className='main-img'>

                    <Image src={fairify}/>
                </div>
                <div className='main-text'>
                    <p>Das ist Fairify!</p>
                </div>
                
            </div>    

            <div className = 'content-box'>
                <p>Prototyp für eine Webanwendung, über die Besucher virtuell an einer Online-Messe teilnehmen und Aussteller 
                    selbst ihren Messestand erstellen und Live-Vorträge halten können. Die Website besteht aus fünf großen Seiten: 
                    Main (Login page), Messehalle, Messestand, Networking Area und Live-Bühne. 
                    In dem Projekt wurden React und Three JS  für 3D-Darstellung und Interface und Jitsi  für die Live-Vorträge und Video-Meeting verwendet. 
                    Meine Rolle: In dem Projekt war ich für die Seite Networking Area zuständig. 
                    Die Seite ist so aufgebaut, dass die Besucher leicht miteinander kommunizieren können. Dazu habe ich 3D Objekte und Animationen mit React und Three JS erstellt.

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