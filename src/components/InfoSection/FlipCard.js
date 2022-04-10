import { useState } from "react";
import "./flipCard.css"

function FlipCard({ card, icon}) {

  
  return (
    <div class="container">
      <div class="card-container">
        <div class="card">
          
          <figure class="front">
          <div class="inner-container">
            <div class="icon-container">
              {icon}
            </div>
            <div class="title-container"> 
              {card.front}
            </div>
              
             
            </div>
            
            

          </figure>
          <figure class="back">
          <div class="text-container"> 
            {card.back}
            </div>
          </figure>
        
        </div>  
        
        
        
        </div>  
      </div>
  );
}

export default FlipCard;