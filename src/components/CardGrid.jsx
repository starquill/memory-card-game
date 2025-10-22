function CardGrid({onCardClick}){
    const cards = [
        {id:1,name:'bulbasaur'},
        { id: 2, name: 'Charmander' },
        { id: 3, name: 'Squirtle' },
        { id: 4, name: 'Pikachu' },
    ]
    return(
        <div className="card-gift">
        { cards.map((card)=>(
            <div className="card" key={card.id} onClick={()=>onCardClick(card.id)}>
                {card.name}
            </div>
        ))}
        </div>
    )
}
export default CardGrid