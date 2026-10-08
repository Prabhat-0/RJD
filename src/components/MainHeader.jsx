import React from 'react'

const MainHeader = ({text, textColor="text-[#052F45]",textSize="text-[48px]",font="font-fraunces"}) => {
  return (
    <h1 className={`${font} font-bold ${textSize}  ${textColor}  `}>
        {text}
    </h1>    
)
}

export default MainHeader