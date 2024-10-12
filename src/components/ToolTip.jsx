/* eslint-disable react/prop-types */

const ToolTip = ({mainText,textTooBeShown}) => {
    
  return (
    <div className="group flex relative">
    <span className="bg-red-400 text-white px-2 ">{mainText}</span>
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
