import React from 'react'
import Link from 'next/link'
const BookFreeTrialButton = ({ background="bg-primary",padding="px-8 md:px-10 " ,textColor="text-[#F2FAFF]", hoverText="hover:text-primary", border="border", hoverBg="hover:bg-[#F2FAFF]", text="Book a Free Trial",width="w-fit",icon,rounded="rounded-full",whitespace="whitespace-nowrap"}) => {
  return (
    <Link
      href="#"
      className={`h-10 sm:h-12 md:h-15 ${width} flex items-center justify-center ${whitespace} gap-2 ${rounded} ${border} border-primary ${padding} text-sm md:text-base 2xl:text-lg font-semibold transition ${background} ${textColor} ${hoverBg} ${hoverText} `}
    >
      {icon && icon}
      {text}
    </Link>
  )
}

export default BookFreeTrialButton