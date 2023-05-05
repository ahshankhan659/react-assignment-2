import React from 'react'
import Cards from './Cards';
import { HeroSec } from './CardsDetail';

function HeroSection(props){
  return (
    <>
      <div className="card-components">
    <h1 className='heading'>{props.heading}</h1>
    <div className='d-flex'>
    
    {
        HeroSec.map((element)=>{
            return(
            <Cards  imgsrc={element.images} head={element.title} text={element.textInfo} btn={element.btns}/>
            )

        })
    }
    </div>
   </div>
 
    
    </>
  )
}
export default HeroSection;