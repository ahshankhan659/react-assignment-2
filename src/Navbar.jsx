import React from 'react'
import Navlist from './Navlist'

function Navbar(){
    const arr=["Home","Services","trading","Content","About"]
    const display=arr.map((element)=>{
        return(
            <Navlist listitem={element}/>
        )

    })


  return (
    <>
    <div className="nav">
        <div className="logo">
            <h1>Portfolio</h1>
        </div>
        <div className="navber">
            <ul>
                {display}
               
            </ul>
        </div>
        <a href="" type='button'>Sign in</a>

    </div>
    </>
  )
}
export default Navbar;
