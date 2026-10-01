import React from 'react'
import Link from 'next/link'
const BookFreeTrialButton = ({ background, textColor, hoverText, hoverBg }) => {
  return (
    <Link
      href="#"
      className={`flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-primary px-6 py-3 text-[16px] font-semibold transition ${background} ${textColor} ${hoverBg} ${hoverText}`}
    >
      Book a Free Trial
    </Link>
  )
}

export default BookFreeTrialButton