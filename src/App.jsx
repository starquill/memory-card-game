import { useState,useEffect } from 'react'
import Scoreboard from './components/Scoreboard'
import CardGrid from './components/CardGrid'


function App(){
    const [currentScore,setCurrentScore]=useState(0);
    const [bestScore,setBestScore]=useState(0);
    const [clickedCards,SetClickedCards]=useState([]);
    const [cardData,setCardData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
            const response=await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            const data=await response.json()
            console.log(data.results)
            setCardData(data.results)
            }
            catch(error){
                console.error('Error fetching data',error);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchData()
    },[])
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
        { isLoading?(<p>loading...</p>):(
        <CardGrid onCardClick={handleCardClick} cardData={cardData}/>)
        }
        </div>
    )
}

export default App