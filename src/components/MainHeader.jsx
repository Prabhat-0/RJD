import React from 'react'

const MainHeader = ({text, textColor="text-[#052F45]",textSize="text-[48px]"}) => {
  return (
    <h1 className={`font-gelasio font-bold ${textSize} ${textColor}`}>
        {text}
    </h1>    
)
}

export default MainHeader