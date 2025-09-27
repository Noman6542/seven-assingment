import React from 'react';

const Banner = ({count,resolvedCount}) => {
  return (
    <div className='max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4  items-center  px-5'>
      <div className="card bg-base-100 items-center shadow-sm mt-8 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] h-full w-full relative ">
  <img 
    src="/vector1.png" 
    alt="left" 
    className="absolute left-0 top-0 h-full object-cover"
  />
  
  <img 
    src="/vector1.png" 
    alt="right" 
    className="absolute right-0 top-0 h-full object-cover rotate-180"
  />

  <div className="card-body relative z-10 text-center text-white flex flex-col items-center justify-center">
    <h2 className="font-bold text-4xl">In-Progress</h2>
    <p className='font-bold text-4xl'>{count}</p>
  </div>
</div>



  <div className="card bg-base-100 items-center shadow-sm mt-8 bg-gradient-to-r from-[#54cf68] to-[#00827a] h-full w-full relative ">
  <img 
    src="/vector1.png" 
    alt="left" 
    className="absolute left-0 top-0 h-full object-cover"
  />
  
  <img 
    src="/vector1.png" 
    alt="right" 
    className="absolute right-0 top-0 h-full object-cover rotate-180"
  />

  <div className="card-body relative z-10 text-center text-white flex flex-col items-center justify-center ">
    <h2 className="font-bold text-4xl">Resolved</h2>
    <p className='font-bold text-4xl'>{resolvedCount}</p>
  </div>
</div>










      {/* <div className="card bg-base-100 items-center shadow-sm mt-8 bg-gradient-to-r from-[#54cf68] to-[#00827a] ">
  <div className="card-body text-center text-white">
    <h2 className="card-title">Resolved</h2>
    <p className='font-bold text-2xl'>{resolvedCount}</p>
    
  </div>
</div> */}
    </div>
  );
};

export default Banner;