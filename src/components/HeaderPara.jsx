const HeaderPara = ({
  font = "font-sans",
  textSize = "text-2xl",
  textColor = "text-[#7B7B7B]",
  tracking = "tracking-[0.3em]",
  text,
  leading="leading-[40px]"
}) => {
  return (
    <p className={`${font} text-sm sm:${textSize} ${textColor} lg:${tracking} md:tracking-[0.2em] tracking-widest md:${leading} leading-7.5 font-medium`}>
      {text.toUpperCase()}
    </p>
  )
}

export default HeaderPara;