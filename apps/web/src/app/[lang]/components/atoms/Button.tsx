import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  borderRadius?: string;
  height?: string;
  fontSize?: string;
  color?:string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  borderRadius = 'rounded',
  height,
  fontSize,
  color,
  ...rest }) => {
  
  let buttonClasses = `px-2 rounded rounded-[${borderRadius}] ${height} text-${fontSize} text-${color}`;

  if (variant === 'primary') {
    buttonClasses += ' bg-blue-500 text-white';
  } else if (variant === 'secondary') {
    buttonClasses += ' bg-gray-300 text-gray-700';
  } else if (variant === 'tertiary') {
    buttonClasses += ' bg-transparent border border-black border-radius-';
  }

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
