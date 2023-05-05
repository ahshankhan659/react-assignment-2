import React from 'react'
import MainText from './MainText';
import {Mainitems} from './MainList.js';

function Main(){
  return (
    <>
    {
        Mainitems.map((element)=>{
            return(
                <MainText title={element.head} title1={element.head1} text={element.info} btn={element.btn1}/>
            )
        })
    }

   
    </>
  )
}
export default Main;