
import Image from 'react-bootstrap/Image'
import mjolnir from '../../assets/img/project/Mjolni1.png'

export default function Mjolnir(){
    return(
        <>
        <div >
            <div className='main-box'>
                <div className='main-img'>

                    <Image src={mjolnir} width={"50%"}/>
                </div>
                <div className='main-text'>
                    <p>Das ist Mjolnir!</p>
                </div>
                
            </div>    

            <div className = 'content-box'>
                <p>Mjolnir: Thors Hammer Mit Sculpting wurde das Muster an Griff und Stein gezeichnet. 
                    Die Texturen von Leder und Metall sind zur Anwendung gekommen. 
                </p>
            </div>
            

        
            
        </div>

            
        </>
            
    );
}