import React from 'react'
import MainHeader from './MainHeader'
import ParaGraph from './ParaGraph'

const ReasonCard = ({ element, headerText, paraText }) => {
  return (
    <div className="group relative flex h-full flex-col items-center justify-start gap-7.5 overflow-hidden rounded-2xl border border-primary/20 bg-white px-10 py-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0">

      {/* Soft gradient glow that fades in on hover */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />


      {/* Icon */}
      <div className="relative z-10 grid size-25 shrink-0 place-items-center overflow-hidden rounded-full bg-primary p-2 transition-all duration-300 ease-out ">
        {element}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-7.5">
        <MainHeader text={headerText} textColor="text-primary" textSize="text-2xl lg:text-[28px]" />
        <ParaGraph text={paraText} textSize="text-base lg:text-[18px]" />
      </div>
    </div>
  )
}

export default ReasonCard