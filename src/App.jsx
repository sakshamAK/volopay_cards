import { useState } from 'react'
import './App.css'
import { Navbar, Card } from './Pages'

function App() {
  const [activeTab, setActiveTab] = useState("your");
  const [cardData, setCardData] = useState([])

  return (
    <div className='my-app'>
      <Navbar setActiveTab = {setActiveTab} activeTab={activeTab} setCardData={setCardData} cardData={cardData} />
      <div className = "cards-container">
        { console.log(activeTab) }
        {cardData.map(item => (<Card key={item.id} activeTab = {activeTab} cardData = {item} />))}
      </div>
    </div>
  )
}

export default App
