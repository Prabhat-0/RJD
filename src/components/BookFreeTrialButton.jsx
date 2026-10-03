import React from 'react'
import Link from 'next/link'
const BookFreeTrialButton = ({ background="bg-primary",padding="px-20" ,textColor="text-[#F2FAFF]", hoverText="hover:text-primary", border="border-2", hoverBg="hover:bg-[#F2FAFF]", text="Book a Free Trial"}) => {
  return (
    <Link
      href="#"
      className={`h-auto w-70 flex items-center gap-2 whitespace-nowrap rounded-full ${border} border-primary ${padding} py-3 text-[16px] font-semibold transition ${background} ${textColor} ${hoverBg} ${hoverText}`}
    >
      {text}
    </Link>
  )
}

export default BookFreeTrialButton