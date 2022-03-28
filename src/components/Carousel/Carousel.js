import React, {useState} from 'react';
import styled from "styled-components";



const Cards = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position: relative;
    height:21.875rem;
    width:100%;
`;


const Card = styled.div`
    display:flex;
    width:27.8125rem;
    height:21.875rem;
    border-radius:0.5rem;
    background-color: red;
    margin-right: 5px ;
`;



const Wrapper = styled.div`



`;

export const Carousel = () => {
    const cards = ['card1','card2','card3']
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [SelectedCard, setSelectedCard] = useState(cards[1]);


    const selectNewCard = (index, card, next = true) => {
        const condition = next ? selectedIndex < cards.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0): condition ? selectedIndex - 1 : cards.length - 1;
        setSelectedCard(cards[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    


    const previous = () => {
        selectNewCard(selectedIndex, cards, false);
    }

    const next = () => {
        selectNewCard(selectedIndex, cards);
    }

  return (
    <Cards>
        <button onClick={previous}>left</button>
        <Card class="card fill-orange">
            <p>cards</p>
        </Card>
        <Card class="card fill-blue">
            <p>{SelectedCard}</p>
        </Card>
        <Card class="card fill-green">
            <p>derecha</p>
        </Card>
        <button onClick={next}>right</button>
    </Cards>
  )
}
