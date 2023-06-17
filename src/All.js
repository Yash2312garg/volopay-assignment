import All from './pages/all';
import { useState, useEffect, useCallback } from "react";

const ALL=()=>{
    const [cards, setCards] = useState([])
    const FilteredCards=cards.filter(
        item=>{
            return (
                item.name||item.budget_name||item.owner_id||item.spent||item.spent.value||item.available_to_spend||item.value
            )
        }
    )

    const fetchData = useCallback(() => {
      fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          setCards(data)
        })
    }, [])
  
    useEffect(() => {
      fetchData()
    }, [fetchData])
  
        return (
            <ul className="mycontainer ml-0">
            {FilteredCards
              .map(card => (
                <All key={card.id}
                  card={card}
                />
              )
              )}
          </ul>
        )
}
export default ALL;