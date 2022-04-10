import React, { useState } from "react";
import "./flipCard.css"

function FlipCard({ card, icon}) {
   // Declare a new state variable with the "useState" Hook
   const [width, setWidth] = React.useState(window.innerWidth);
   const breakpoint = 620;
 
   React.useEffect(() => {
     /* Inside of a "useEffect" hook add an event listener that updates
        the "width" state variable when the window size changes */
     window.addEventListener("resize", () => setWidth(window.innerWidth));
 
     /* passing an empty array as the dependencies of the effect will cause this
        effect to only run when the component mounts, and not each time it updates.
        We only want the listener to be added once */
   }, []);


  
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