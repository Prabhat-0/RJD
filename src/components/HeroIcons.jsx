import React from 'react'

const HeroIcons = ({icons, text}) => {
  return (
    <div className='w-auto h-15 flex items-center rounded-xl font-semibold text-[20px] p-2 pl-8 pr-8 bg-[#FFFFFF] text-[#052F45B2] shadow-sm shadow-white/25'>{icons && icons} {" "} {text}</div>
  )
}

export default HeroIcons