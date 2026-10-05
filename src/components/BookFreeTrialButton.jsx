import React from 'react'
import Link from 'next/link'
const BookFreeTrialButton = ({ background="bg-primary",padding="px-10" ,textColor="text-[#F2FAFF]", hoverText="hover:text-primary", border="border-2", hoverBg="hover:bg-[#F2FAFF]", text="Book a Free Trial",width="w-fit"}) => {
  return (
    <Link
      href="#"
      className={`h-15 ${width} flex items-center justify-center whitespace-nowrap gap-2 rounded-full ${border} border-primary ${padding}  text-[16px] font-semibold transition ${background} ${textColor} ${hoverBg} ${hoverText} `}
    >
      {text}
    </Link>
  )
}

export default BookFreeTrialButton