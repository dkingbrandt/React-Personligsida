import React from 'react';
import {Link} from 'react-router-dom'
import Dan from './img/Dan.png'
import Footer from './footer';






const Ocean =()=>{
    return(
        <div className='oceanContainer'>
        <header>

        <img src={Dan} />
         
        
            <ul>
            
                <li>
                    <Link className="Link" to="/">Hem</Link>
                </li>
                
                <li>
                    <Link  className="Link" to="/price">Prislista</Link>
                </li>
                
                <li>
                    <Link className="currentPage" to="/ocean">Havet</Link>
                </li>
            
                <li>
                    <Link  className="Link" to="/contact">Kontakt</Link>
                </li>
            
            </ul>
        </header>
        <div className='pContainerOcean'>
          <h3>
              NEDSKRÄPNING I VÅRA HAV !
          </h3>
           <p>
           Marin nedskräpning är ett globalt problem som inte känner några nationella gränser.
            Forskare tror att det finns mer än 150 miljoner ton plast i våra hav och varje år tillkommer 5-13 miljoner ton plast.
            <br></br>
            <br></br>
             
             Nedskräpningen växer snabbt och på sextio år har plastproduktionen i världen ökat lavinartat,
            och det märks i våra hav.
            <br></br>
            <br></br>
               
             På grund av havsströmmar ackumuleras plast och annat skräp speciellt vid fem platser i världshaven, så kallade ”skräp-öar”.
              Den största samlingen skräp i havet finns i norra Stilla Havet - i ett område som man brukar kalla The Great Pacific Garbage Patch.
            <br></br>
            <br></br> 
            Att hålla våra hav rena har alltid varit en självklarhet för mej, och genom att donera pengar till orginisationer vi står bakom och anordna 
            dagar för platstädning på stränder så försöker vi dra vårat strå till stacken.
          </p>
         
        </div>
        
        <img src="https://cdn.pixabay.com/photo/2019/06/16/12/06/garbage-4277613_1280.jpg" />
        
        <Footer/>
        
         </div>
    )
}

export default Ocean;