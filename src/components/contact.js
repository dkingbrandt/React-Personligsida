import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Dan from './img/Dan.png'
import bonfire from './img/bonfire.png'
import Footer from './footer';




const Contact =()=>{
    const [toggle, setToggle] = useState(false)

    
    return(
    <div className='contactContainer'>
           
        <header>
        <img src={Dan} />
            <ul>
            
                <li>
                    <Link className="Link" to="/">Hem</Link>
                </li>
                
                <li>
                    <Link className="Link" to="/price">Prislista</Link>
                </li>
                
                <li>
                    <Link  className="Link" to="/ocean">Havet</Link>
                </li>
            
                <li>
                    <Link  className="currentPage" to="/contact">Kontakt</Link>
                </li>
            
            </ul>
        </header>
        <div className='pContainer'>
          <h3>
              THE BONFIRE !
          </h3>
           <p>
           Efter en dags hård surfning så är det obligatoriskt att samlas runt en brasa.
           <br></br>
           Det är runt brasan vi pratar om hur dagen har varit , både högt och lågt, 
           <br></br>
           <br></br>
           Brasans magiska kraft drar in oss och i detta så skapas en stor familj.
           <br></br>
           <br></br>
           Nya bekanskapaer skapas och nya band görs!
           <br></br>
           <br></br>
           Låt oss skapa en BonFire tillsammans!
           <br></br>
           <br></br>
            Tryck på Brasan till höger och kontakta mej redan idag för att boka din unika Surf upplevelse.


           </p>
        </div>
        
    
       <img src={bonfire} className="bonfireIcon" onClick={() => setToggle(!toggle)}/>
      {toggle && (
       
        <div className='contactBox'>
            <p>SurferDude Courses</p>
            <p>Adress: skogvägen 35
            <br></br>
             131 41
             <br></br> 
             Torö Nynäshamn
             </p>
            <p>Mob: +46 76 564 88 93</p>
            <p>Email: dan.kingbrant@surferdude.com</p>
        </div>
      
       
      )}
    
  
      
        <img  className="surfCompetition" src="https://cdn.pixabay.com/photo/2015/07/11/06/53/campfire-840542_1280.jpg" alt="surferdude" />
         
        <Footer/>
    
    </div> 
    )
}

export default Contact