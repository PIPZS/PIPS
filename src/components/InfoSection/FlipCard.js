import { useState } from "react";
import cn from "classnames";
import {CardFrontText, CardBackText, Text, Image, ImageWrapper } from './InfoElements'

function FlipCard({ card, icon}) {
  const [showBack, setShowBack] = useState(false);


  let resizeTimer;
    window.addEventListener("resize", () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    });

  return (
    <div
      tabIndex={card.id} 
      className="flip-card-outer"
    >
      <div className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front">
          <div className="card-body">
            <CardFrontText>
              <ImageWrapper>
                <Image src={icon} alt=""></Image>
              </ImageWrapper>
                <Text>{card.front}</Text>
            </CardFrontText>
          </div>
        </div>
        <div className="card back">
          {/* <div className="card-body d-flex justify-content-center align-items-center"> */}
            <CardBackText>
                <Text>{card.back}</Text>
            </CardBackText>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;