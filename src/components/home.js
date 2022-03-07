import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import Dan from './img/Dan.png'
import Fist from './img/Fist.png'
import Hangloose from './img/Hangloose.png'
import Footer from './footer'


const Home =()=>{
    const [toggle, setToggle] = useState(false)
    return (
        <div className='homeContainer'>
            <header>
            <img src={Dan} />
            <ul>
            
                <li>
                    <Link  className="currentPage" to="/">Hem</Link>
                </li>
                
                <li>
                    <Link  className="Link" to="/price">Prislista</Link>
                </li>
                
                <li>
                    <Link  className="Link" to="/ocean">Havet</Link>
                </li>
            
                <li>
                    <Link  className="Link" to="/contact">Kontakt</Link>
                </li>
            
            </ul>
            </header>
            <div className='pContainerHome'>
          <h3>
              THE SURFERDUDE 
          </h3>
           <p>
          Redan som 8 åring så fick jag hjälpa min pappa att underhålla familjens surfbrädor
           <br></br>
           När sedan min far tog mej till stenstranden på Torö så skulle jag komma att bli kär,
            <br></br>
           kär i havet och kär i Surfing.
           <br></br>
           <br></br>
           Än idag kommer jag ihåg att jag fick börja med att släppa min bräda fram och tillbaka i vattnet på torö, 
           och hur fötterna gled runt längs botten på dem vassa algklädda stenarna
           
           <br></br>
           <br></br>
           Hela min familjs liv har alltid kretsat runt surfing och förutom Sverige så har jag har fått växa upp och surfat på ställen som Hawaii och Costa rica.
           <br></br>
           <br></br>
          Med många medaljer och vunna tävlingar i diverse stor tävlingar utomlands så har jag nu flyttat tillbaka till Sverige, Med ett mål
           <br></br>
           <br></br>
            Ett mål att få dela med mej av den skönhet och upplevelse surfing har att ge och visa hur vackert havet är.
           
          </p>
        </div>{toggle === false ?(
            <>
                <p className='fistParagraph'>FIST BUMP ME !</p>
                <img src={Fist} className="fistEmoji" onClick={() => setToggle(true)}/>
            </>
        ):(
            <div>
            <p className='hanglooseParagraph'>HANG LOOSE !</p>
            <img className='hangEmoji' src={Hangloose} />
            
            <p className='ShakaParagraph'>Hang loose also called the Shaka Sign
            <br></br>
             is an expression that conveys the "Aloha Spirit",
            <br></br>
             a concept of friendship, understanding, compassion, and solidarity </p>
           
       </div>
      
       
       )}

            <img src="https://cdn.pixabay.com/photo/2019/02/15/20/15/surfing-3999232_1280.jpg" alt="surferdude" />
            <Footer/>
           
        </div>
   
    )
}

export default Home