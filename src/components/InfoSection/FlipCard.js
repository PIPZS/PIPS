import React, { useState } from "react";
import "./flipCard.css"

function FlipCard({ card, icon}) {
  const [flip, setFlip] = useState(false);
  
  

  return (
    <div class="container">
      <div class="card-container" >
        <div className={`card ${flip ? "flip" : ""}`}>
          <figure class="front" onClick={() => setFlip(!flip) }>
          <div class="inner-container">
            <div class="icon-container">
              {icon}
            </div>
            <div class="title-container"> 
              {card.front}
            </div>
            </div>
          </figure>
          <figure class="back" onClick={() => setFlip(!flip)} >
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