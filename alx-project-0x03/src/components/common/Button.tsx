import React from "react";
import { ButtonProps } from "../../interface";

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {

  const backgroundColorClass = buttonBackgroundColor ? {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  }[buttonBackgroundColor] : 'bg-slate-500'

  const hoverColorClass = buttonBackgroundColor ? {
    red: 'hover:bg-red-400',
    blue: 'hover:bg-blue-400',
    orange: 'hover:bg-orange-400',
    green: 'hover:bg-green-400',
  }[buttonBackgroundColor] : 'hover:bg-slate-400'

  return (
    <button onClick={action} className={`${backgroundColorClass} ${hoverColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 text-white`}>
      {buttonLabel}
    </button>
  )
}

export default Button;
