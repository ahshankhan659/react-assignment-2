import React from 'react'

function Cards(props){
  return (
    <>
    
      
    <div class="card" >
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.head}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" >{props.btn}</a>
  </div>
</div>


    </>
  )
}
export default Cards;