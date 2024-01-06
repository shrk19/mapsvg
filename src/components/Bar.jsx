import React from 'react'

const Bar = () => {
  return (
    <div className='py-8 px-8'>
    <div className='flex flex-row'>
      <div className='bg-[#ffaa00] h-2 w-[30%] rounded-tl-lg rounded-bl-lg'></div>
      <div className='bg-[#ff7900] h-2 w-[30%]'></div>
      <div className='bg-[#ff6000] h-2 w-[20%]'></div>
      <div className='bg-[#fc2f00] h-2 w-[20%] rounded-tr-lg rounded-br-lg'></div>
    </div>
    <div className='flex flex-row'>
      <div className='w-[30%]'>0-300</div>
      <div className='w-[30%]'>301-600</div>
      <div className='w-[20%]'>601-800</div>
      <div className='h-2 w-[20%]'>{`>800`}</div>
    </div>
    </div>
  )
}

export default Bar