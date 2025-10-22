import { useState,useEffect } from 'react'
import Scoreboard from './components/Scoreboard'
import CardGrid from './components/CardGrid'


function App(){
    const [currentScore,setCurrentScore]=useState(0);
    const [bestScore,setBestScore]=useState(0);
    const [clickedCards,SetClickedCards]=useState([]);
    const [cardData,setCardData]=useState([]);
    const [isloading,SetIsLoading]=useState(true);
    const handleCardClick=(cardId)=>{
        if(clickedCards.includes(cardId)){
            if(currentScore>bestScore){
                setBestScore(currentScore)
            }
            setCurrentScore(0);
            SetClickedCards([]);
        }
        else{
        SetClickedCards([...clickedCards,cardId]);
        setCurrentScore(currentScore+1);
        }
    }
    return(
        <div>
        <h1>Memory Card Game</h1>
        <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
        <CardGrid onCardClick={handleCardClick}/>
        </div>
    )
}

export default App