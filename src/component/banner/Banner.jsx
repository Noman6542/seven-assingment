import React from 'react';

const Banner = ({count}) => {
  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4  items-center  px-5'>
      <div className="card bg-base-100 items-center shadow-sm mt-8 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] ">
  <div className="card-body text-center text-white">
    <h2 className="card-title">In-Progress</h2>
    <p className='font-bold text-2xl'>{count}</p>
    
  </div>
</div>
      <div className="card bg-base-100 items-center shadow-sm mt-8 bg-gradient-to-r from-[#54cf68] to-[#00827a] ">
  <div className="card-body text-center text-white">
    <h2 className="card-title">Resolved</h2>
    <p className='font-bold text-2xl'>0</p>
    
  </div>
</div>
    </div>
  );
};

export default Banner;