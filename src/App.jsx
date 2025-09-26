import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import Card from './component/card/card'
import { ToastContainer, toast } from 'react-toastify';






const cardData = async()=>{
  const res = await fetch('/card.json')
  return res.json()
}



function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [resolvedCards, setResolvedCards] = useState([]); 
  const [count, setCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)

   const handleCardClick = (card) => {
    setSelectedCards([...selectedCards, card])
    setCount(count + 1) 
    toast.success(`In Progress`);
  }

     const handleComplete = (id) => {
  const completedCard = selectedCards.find((c) => c.id === id);

  setSelectedCards(selectedCards.filter((c) => c.id !== id));
  setResolvedCards([...resolvedCards, completedCard]);
  setCount(count - 1);
  setResolvedCount(resolvedCount + 1);
}; 

  const cardPromiss = cardData();

  return (
    <div className='bg-[#f5f5f5] max-w-[1600px] mx-auto'>
   <Navbar ></Navbar>
    
    <Banner  count={count} resolvedCount={resolvedCount}></Banner>

   <Suspense fallback={
    <div className="flex justify-center items-center min-h-[300px]">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  }>
     <Card cardPromiss={cardPromiss} onCardClick={handleCardClick} selectedCards={selectedCards} onComplete={handleComplete} resolvedCards={resolvedCards}></Card>
   </Suspense>
  

    <ToastContainer  position="top-right" autoClose={2000}/>
    </div>
  )
}

export default App
