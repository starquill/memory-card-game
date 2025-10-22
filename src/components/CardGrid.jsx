function CardGrid({onCardClick,cardData}){
    return(
        <div className="card-gift">
        { cardData.map((card)=>(
            <div className="card" key={card.name} onClick={()=>onCardClick(card.name)}>
                {card.name}
            </div>
        ))}
        </div>
    )
}
export default CardGrid