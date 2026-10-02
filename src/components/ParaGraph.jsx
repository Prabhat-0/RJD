import React from 'react'

const ParaGraph = ({text ,textSize="text-[22px]" ,textColor="text-[#454545] " }) => {
  return (
    <p className={`${textSize} font-sans ${textColor} font-medium`}>{text}</p>
  )
}

export default ParaGraph