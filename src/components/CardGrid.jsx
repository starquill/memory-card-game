function CardGrid({onCardClick,cardData}){
    return(
        <div className="card-grid">
        { cardData.map((card)=>(
            <div className="card" key={card.name} onClick={()=>onCardClick(card.name)}>
               <p>{card.name}</p>
               <img src={card.image} alt={card.name} />
            </div>
        ))}
        </div>
    )
}
export default CardGrid