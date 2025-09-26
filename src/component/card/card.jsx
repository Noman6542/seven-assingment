import React, { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Card = ({ cardPromiss, onCardClick, selectedCards,        onComplete, resolvedCards }) => {
  const cardData = use(cardPromiss);

   const remainingCards = cardData.filter(
    (c) => 
      !selectedCards.find((s) => s.id === c.id) && 
      !resolvedCards.find((r) => r.id === c.id)
  );
  
  return (
    <div className="md:flex justify-center mt-10 max-w-[1600px] mx-auto gap-2 md:gap-5 px-5">
  <div className="">
   <h1 className="font-semibold text-[24px]">
  Customer Tickets </h1>

<div className="grid md:grid-cols-2 gap-3 mt-6">
   {remainingCards.map((card) => (
        <div key={card.id}
              className="card bg-base-100 card-sm shadow-sm px-9 py-6 gap-2 cursor-pointer"onClick={() => onCardClick(card)}>
   <div className="">
    <div className="flex justify-between items-center w-full">
  <h2 className="card-title">{card.title}</h2>
   <p className={`${card.status === 'Open'? 'bg-[#b9f8cf] text-[#0b5e06]': 'bg-[#f8f3b9] text-[#9c7700]'
  } py-1 px-3 rounded-full`}>
 <FontAwesomeIcon icon={faCircle}className="text-[#0b5e06] text-xs mr-1"/> {card.status}</p>
   </div>

 <p className="mt-3 text-[#627382]">{card.description} </p>

  <div className="flex justify-between mt-4">
   <div className="flex gap-4">
  <p className="text-[#627382]">#{card.cardId}  </p>
  <p className={card.priority === 'HIGH PRIORITY' ? 'text-[#f83044]' : 'text-[#febb0c]'}>
  {card.priority}
</p>

 </div>
  <div className="flex gap-4">
   <p className="text-[#627382]">{card.assignee} </p>
    <p> <FontAwesomeIcon icon={faCalendarDays}className="text-[#627382] mr-1"/>
   <span className="text-[#627382]">{card.date}</span>
      </p>
     </div>
    </div>
  </div>
 </div>
))}
</div>
</div>

 <div className=" rounded-md">
   <h1 className="font-semibold text-[24px]">Task Status</h1>
     
        {selectedCards.length === 0 ? (
          <p className="text-[#627382]">Select a ticket to add to Task Status</p>
        ) : (
          <div className="mt-4 space-y-3 ">
            {selectedCards.map((card) => (
              <div
                key={card.id}
                className="p-2 bg-white shadow-sm rounded-md "
              >
                <div className="w-full">
                  <span >{card.title}</span>
                </div>
               
                <div>
                <button
                  onClick={() => onComplete(card.id)}
                  className="bg-green-600 text-white text-xs px-2 py-1 rounded hover:bg-green-700 w-full mt-3"
                >
                  Complete
                </button>
                </div>
                
              </div>
            ))}
          </div>
        )}

        <div>
        <h1 className="font-semibold text-[24px] mb-4">Resolved Tickets</h1>
        {resolvedCards.length === 0 ? (
          <p className="text-[#627382]">No resolved tickets yet</p>
        ) : (
          <div className="space-y-3">
            {resolvedCards.map((card) => (
              <div key={card.id} className="p-3 bg-green-50 border border-green-200 shadow-sm rounded-md">
                <span className="block font-medium text-green-700">{card.title}</span>
                <span className="text-xs text-green-600">Resolved</span>
              </div>
            ))}
          </div>
        )}
      </div>


        </div>

       





      </div>
  );
};

export default Card;
