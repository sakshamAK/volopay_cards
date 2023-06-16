import { useState } from 'react'
import './App.css'
import { Navbar, Card, Filter } from './Pages'
import { data } from './data/data';

function App() {
  const [activeTab, setActiveTab] = useState("your");
  const [cardData, setCardData] = useState(data.data.filter(item => item.owner_id === 1))
  const [filter, setFilter] = useState(false)
  const [typeVal, setTypeVal] = useState();

  return (
    <div className='my-app'>
      <Navbar setActiveTab={setActiveTab} activeTab={activeTab} setCardData={setCardData} cardData={cardData} setFilter={setFilter} typeVal={typeVal} />
      <Filter filter={filter} setCardData={setCardData} setTypeVal={setTypeVal} />
      <div className="cards-container">
        {cardData.length === 0 ? <h1>No Data Found</h1> : cardData.map(item => (<Card key={item.id} activeTab={activeTab} cardData={item} />))}
      </div>
    </div>
  )
}

export default App
