function Scoreboard(props){
    return(
        <div className="scoreboard">
            <h2>Score:{props.currentScore}</h2>
            <h2>Best Score:{props.bestScore}</h2>
        </div>
    )
}
export default Scoreboard