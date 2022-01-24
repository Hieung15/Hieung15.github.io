import Image from 'react-bootstrap/Image'
import dragon from '../../assets/img/project/dragon.png'

export default function Dragon(){
    return(
        <>
        <div >
            <div className='main-box'>
                <div className='main-img'>

                    <Image src={dragon} width={"40%"}/>
                </div>
                <div className='main-text'>
                    <p>Das ist Dragon!</p>
                </div>
                
            </div>    

            <div className = 'content-box'>
                <p>-	 Drache zu dem Thema „aggregierte Objekte“: Das Projekt wurde von Modul „CGI“ im Wintersemester 2020 ausgeführt. 
                    Mit Alltagsobjekten wurde ein großes Objekt erstellt, wobei Materialien wie Metall, Holz, Wachs und Glass eingesetzt wurden. 
                </p>
            </div>
            

        
            
        </div>

            
        </>
            
    );
}