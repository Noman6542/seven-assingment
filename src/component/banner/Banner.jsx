import React from 'react';

const Banner = ({count,resolvedCount}) => {
  return (
    <div className='max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4  items-center  px-5'>
      <div className="card bg-base-100 items-center shadow-sm mt-8 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] ">
  <div className="card-body text-center text-white">
    <h2 className="card-title">In-Progress</h2>
    <p className='font-bold text-2xl'>{count}</p>
    
  </div>
</div>
      <div className="card bg-base-100 items-center shadow-sm mt-8 bg-gradient-to-r from-[#54cf68] to-[#00827a] ">
  <div className="card-body text-center text-white">
    <h2 className="card-title">Resolved</h2>
    <p className='font-bold text-2xl'>{resolvedCount}</p>
    
  </div>
</div>
    </div>
  );
};

export default Banner;