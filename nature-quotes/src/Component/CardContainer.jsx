import React from 'react'
import Cards from './Cards'
import cardData from './CardData'

export default function CardContainer() {
  return (
   <main>
    <div className="card-container">
      {
        cardData.map(val=>(
          <Cards img={val.imgscr} text ={val.text} author={val.person} key={val.imgscr}/>
        ))
      }
    </div>
   </main>
  )
}


