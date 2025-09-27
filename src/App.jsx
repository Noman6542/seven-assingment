import { Suspense, useState,useEffect } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import Card from './component/card/card'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './component/footer/Footer'

function App() {
    const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [resolvedCards, setResolvedCards] = useState([]);
  const [count, setCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/card.json');
      const data = await res.json();
      setCards(data);
    };
    fetchData();
  }, []);

const handleCardClick = (card) => {
     setSelectedCards(prev => [...prev, card]);
     setCount(prev => prev + 1);

      toast.success(`In Progress`);
    
  };

  const handleComplete = (cardId) => {
  const completedCard = selectedCards.find(c => c.cardId === cardId);
  if (!completedCard) return;

  const alreadyResolved = resolvedCards.some(c => c.cardId === cardId);
  if (!alreadyResolved) {
    setResolvedCards(prev => [...prev, completedCard]);
    setResolvedCount(prev => prev + 1);
  }

  setSelectedCards(prev => prev.filter(c => c.cardId !== cardId));
  setCount(prev => prev - 1);
  setCards(prev => prev.filter(c => c.cardId !== cardId));
};

 

  return (
    <div className='bg-[#f5f5f5] max-w-[1600px] mx-auto'>
   <Navbar ></Navbar>
    
    <Banner  count={count} resolvedCount={resolvedCount}></Banner>

   <Suspense fallback={<h4>Data is loading.....</h4>}>
     <Card cards={cards} onCardClick={handleCardClick} selectedCards={selectedCards} onComplete={handleComplete} resolvedCards={resolvedCards}></Card>
   </Suspense>

    <Footer></Footer>

    <ToastContainer  position="top-right" autoClose={2000}/>
    </div>
  )
}

export default App
