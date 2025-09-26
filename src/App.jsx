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
  const [count, setCount] = useState(0)

   const handleCardClick = (card) => {
    setSelectedCards([...selectedCards, card])
    setCount(count + 1) 
    toast.success(`In Progress`);
  }

   const handleComplete = (id) => {
    setSelectedCards(selectedCards.filter((c) => c.id !== id));
  };


  const cardPromiss = cardData();

  return (
    <div className='bg-[#f5f5f5]'>
   <Navbar ></Navbar>
    
    <Banner  count={count}></Banner>

   <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
     <Card cardPromiss={cardPromiss} onCardClick={handleCardClick} selectedCards={selectedCards} onComplete={handleComplete}></Card>
   </Suspense>
  

    <ToastContainer  position="top-right" autoClose={2000}/>
    </div>
  )
}

export default App
