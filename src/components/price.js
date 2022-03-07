import React from 'react';
import {Link} from 'react-router-dom'
import Dan from './img/Dan.png'
import Footer from './footer';
import priceList from './pricelist';
import Card from './pricelistcard';

function createpricelistCard(price) {
    return (
        <Card
        key={price.id}
        name={price.name}
        längd={price.längd}
        ålder={price.ålder}
        antal={price.antal}
        övrigt={price.övrigt}
        pris={price.pris}
        plats={price.plats}
     />
    );
  }


const Price = () => {
    return (
        <div className='priceContainer'>
        <header>
        <img src={Dan} />
            <ul>
            
                <li>
                    <Link className="Link" to="/">Hem</Link>
                </li>
                
                <li>
                    <Link className="currentPage" to="/price">Prislista</Link>
                </li>
                
                <li>
                    <Link  className="Link" to="/ocean">Havet</Link>
                </li>
            
                <li>
                    <Link  className="Link" to="/contact">Kontakt</Link>
                </li>
            
            </ul>
        </header>
        <div className='pContainerPrice'>
      
        {priceList.map(createpricelistCard)}
        </div>
        <img  className="surfCompetition" src="https://cdn.pixabay.com/photo/2015/09/06/01/00/surfing-926822_1280.jpg" alt="surferdude" />
        <Footer/>
       
         </div>
         
    );
  };
  
  export default Price;