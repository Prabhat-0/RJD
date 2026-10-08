import React from 'react'

const ParaGraph = ({text ,textSize="lg:text-lg 2xl:text-xl" ,textColor="text-[#454545] " }) => {
  return (
    <p className={`text-sm ${textSize}  font-sans ${textColor} font-medium `}>{text}</p>
  )
}

export default ParaGraph