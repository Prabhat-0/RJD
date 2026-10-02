const HeaderPara = ({
  font = "font-sans",
  textSize = "text-sm",
  textColor = "text-[#7B7B7B]",
  tracking = "tracking-[0.3em]",
  text,
}) => {
  return (
    <p className={`${font} ${textSize} ${textColor} ${tracking} sm:text-[18px]`}>
      {text}
    </p>
  )
}

export default HeaderPara