import React, { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';

type ButtonProps = {
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  children?: ReactNode;
};

const variants = {
  primary: 'bg-primaryButton',
  secondary: 'bg-secondaryButton',
};

function Button({ onClick, variant, children }: ButtonProps): JSX.Element {
  return (
    <button
      className={`w-64 uppercase h-10 rounded-xl text-secondary ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
