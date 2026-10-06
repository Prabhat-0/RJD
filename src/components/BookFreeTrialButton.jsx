import React from 'react'
import Link from 'next/link'
const BookFreeTrialButton = ({ background="bg-primary",padding="px-10" ,textColor="text-[#F2FAFF]", hoverText="hover:text-primary", border="border", hoverBg="hover:bg-[#F2FAFF]", text="Book a Free Trial",width="w-fit",icon,rounded="rounded-full"}) => {
  return (
    <Link
      href="#"
      className={`h-15 ${width} flex items-center justify-center whitespace-nowrap gap-2 ${rounded} ${border} border-primary ${padding}  text-[16px] font-semibold transition ${background} ${textColor} ${hoverBg} ${hoverText} `}
    >
      {icon && icon}
      {text}
    </Link>
  )
}

export default BookFreeTrialButton