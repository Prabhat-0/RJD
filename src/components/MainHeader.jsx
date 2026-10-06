import React from 'react'

const MainHeader = ({text, textColor="text-[#052F45]",textSize="text-[48px]"}) => {
  return (
    <h1 className={`font-gelasio font-bold lg:${textSize} md:text-[48px] sm:text-[40px] text-[32px] ${textColor}  `}>
        {text}
    </h1>    
)
}

export default MainHeader