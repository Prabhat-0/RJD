import React from 'react'

const HeroIcons = ({ icon, text }) => {
  return (
    <span className="flex h-15 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-white p-2 px-8 text-[20px] font-semibold text-[#052F45B2] shadow-sm shadow-white/25">
      {icon}
      {text}
    </span>
  )
}

export default HeroIcons