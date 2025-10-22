function CardGrid({onCardClick}){
    return(
        <div className="card-gift">
        <div className="card" onClick={onCardClick}>Card 1</div>
        <div className="card" onClick={onCardClick}>Card 2</div>
        <div className="card" onClick={onCardClick}>Card 3</div>
        <div className="card" onClick={onCardClick}>Card 4</div>
        </div>
    )
}
export default CardGrid