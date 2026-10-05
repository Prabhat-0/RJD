const HeaderPara = ({
  font = "font-sans",
  textSize = "text-[24px]",
  textColor = "text-[#7B7B7B]",
  tracking = "tracking-[0.3em]",
  text,
  leading="leading-[40px]"
}) => {
  return (
    <p className={`${font} ${textSize} ${textColor} ${tracking}  ${leading} font-medium`}>
      {text.toUpperCase()}
    </p>
  )
}

export default HeaderPara