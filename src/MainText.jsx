import React from 'react'

function MainText(props){
  return (
    <>
    <div className="main">
        <div className="main-text">
            <h4>{props.title}</h4>
            <h1>{props.title1}</h1>
             <p>{props.text}</p>
             <a href="" type='button'>{props.btn}</a>
        </div>
    </div>
    </>
  )
}
export default MainText;