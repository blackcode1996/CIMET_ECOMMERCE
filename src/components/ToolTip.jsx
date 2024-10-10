import React from 'react'

const ToolTip = ({mainText,textTooBeShown,bgColor}) => {
    
  return (
    <div className="group flex relative">
    <span className={` text-${bgColor} px-2 cursor-pointer hover:text-secondary`} >{mainText}</span>
    <span
      className="group-hover:opacity-100 transition-opacity bg-neutral p-2 w-44 text-sm text-secondary  rounded-md absolute left-1/2 
-translate-x-1/2 translate-y-full opacity-0 mx-auto"
    >
      {textTooBeShown}
    </span>
  </div>
  )
}

export default ToolTip
