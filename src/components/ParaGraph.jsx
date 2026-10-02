import React from 'react'

const ParaGraph = ({text ,textSize="text-[22px]" }) => {
  return (
    <p className={`${textSize} font-sans  text-[#454545] font-medium`}>{text}</p>
  )
}

export default ParaGraph