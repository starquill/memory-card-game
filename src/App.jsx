import { useState } from 'react'
import Scoreboard from './components/Scoreboard'
import CardGrid from './components/CardGrid'


function App(){
    const [currentScore,setCurrentScore]=useState(0);
    const [bestScore,setBestScore]=useState(0);
    return(
        <div>
        <h1>Memory Card Game</h1>
        <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
        <CardGrid/>
        </div>
    )
}

export default App