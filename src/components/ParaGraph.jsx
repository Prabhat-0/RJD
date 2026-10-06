import React from 'react'

const ParaGraph = ({text ,textSize="text-[24px]" ,textColor="text-[#454545] " }) => {
  return (
    <p className={` xl:${textSize} lg:${textSize} md:text-[20px] text-[16px]  font-sans ${textColor} font-medium `}>{text}</p>
  )
}

export default ParaGraph