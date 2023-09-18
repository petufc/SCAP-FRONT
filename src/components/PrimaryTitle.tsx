import React from 'react'
import roboto_flex from './fonts/RobotoFlex'

interface PrimaryTitleProps {
  text: string
}

const PrimaryTitle = ({ text } : PrimaryTitleProps) => {
  return (
    <h1 className={`${roboto_flex.className} text-center text-[#0F172A] font-bold text-[45px] m-[30px]`}>
      {text}
    </h1>
  )
}

export default PrimaryTitle
