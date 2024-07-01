import React from 'react';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = 'button',
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
