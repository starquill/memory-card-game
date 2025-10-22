function CardGrid({onCardClick,cardData}){
    return(
        <div className="card-gift">
        { cardData.map((card)=>(
            <div className="card" key={card.name} onClick={()=>onCardClick(card.name)}>
               <p>{card.name}</p>
            </div>
        ))}
        </div>
    )
}
export default CardGrid