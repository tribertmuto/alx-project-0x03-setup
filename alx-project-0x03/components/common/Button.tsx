import { ButtonProps } from "../interface";

const Button = ({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor,
  action,
}: ButtonProps) => {
  const colorMap: Record<'red' | 'blue' | 'orange' | 'green', string> = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  };
  const backgroundColorClass = buttonBackgroundColor && colorMap[buttonBackgroundColor as keyof typeof colorMap]
    ? colorMap[buttonBackgroundColor as keyof typeof colorMap]
    : 'bg-slate-500';

  return (
    <button onClick={action} className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}>
      {buttonLabel}
    </button>
  )
}

export default Button;