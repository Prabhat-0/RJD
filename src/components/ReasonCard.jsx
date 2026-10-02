import React from 'react'
import MainHeader from './MainHeader'
import ParaGraph from './ParaGraph'

const ReasonCard = ({ element, headerText, paraText }) => {
  return (
    <div className='flex h-full flex-col items-center justify-start gap-4 px-5 py-6 text-center'>
      <div className='grid size-25 shrink-0 place-items-center overflow-hidden rounded-full bg-primary p-2'>
        {element}
      </div>
      <MainHeader text={headerText} textColor="text-primary" textSize="text-2xl lg:text-[28px]" />
      <ParaGraph text={paraText} textSize="text-base lg:text-[18px]" />
    </div>
  )
}

export default ReasonCard