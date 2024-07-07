import React from 'react';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = 'button',
  className,
  disabled = false,
  iconLeft,
  iconRight,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${className} flex justify-center items-center gap-[5px]`}
      disabled={disabled}
    >
     {iconLeft && iconLeft}  {label} {iconRight && iconRight}
    </button>
  );
};

export default Button;
