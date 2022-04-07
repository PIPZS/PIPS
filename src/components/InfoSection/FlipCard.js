import { useState } from "react";
import cn from "classnames";
import {CardFrontText, CardBackText, Text, ImageWrapper, CardBody } from './InfoElements';
import "./flipCard.css"

function FlipCard({ card, icon}) {

  
  return (
    <div class="container">
      <div class="card-container">
        <div class="card">
          
          <figure class="front">
          <div>
              <h1>front</h1>
              <p>sasasaas</p>
            </div>
            
            

          </figure>
          <figure class="back">
            <h1>back</h1>
          </figure>
        
        </div>  
        
        
        
        </div>  
      </div>
  );
}

export default FlipCard;