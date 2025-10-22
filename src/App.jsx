import { useState,useEffect } from 'react'
import Scoreboard from './components/Scoreboard'
import CardGrid from './components/CardGrid'
import './App.css';

function shuffle(cardData){
    const newData=[...cardData]
    for(let i=newData.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [newData[i],newData[j]]=[newData[j],newData[i]]
    }
    return newData
}

function App(){
    const [currentScore,setCurrentScore]=useState(0);
    const [bestScore,setBestScore]=useState(0);
    const [clickedCards,setClickedCards]=useState([]);
    const [cardData,setCardData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
            const response=await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            const data=await response.json()
            const detailedPromises = data.results.map(async (pokemon)=>{
                const detailedResponse=await fetch(pokemon.url);
                return await detailedResponse.json()
            })
            const detailedData=await Promise.all(detailedPromises)
            const processedData=detailedData.map((p)=>({
                id:p.name,
                name:p.name,
                image:p.sprites.other['official-artwork'].front_default,
            }))
            setCardData(shuffle(processedData))
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
            setClickedCards([]);
        }
        else{
        setClickedCards([...clickedCards,cardId]);
        setCurrentScore(currentScore+1);
        }
        setCardData(shuffle(cardData))
    }
    return(
        <div className="app">
        <div className="header">
          <h1>Memory Card Game</h1>
          <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        </div>
      
        {isLoading ? (
          <p className="loading-text">Loading Cards...</p>
        ):(
          <CardGrid onCardClick={handleCardClick} cardData={cardData} />
        )}
      </div>
      
    )
}

export default App