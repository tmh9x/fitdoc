import React, { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';

type ButtonProps = {
  onClick: () => void;
  children?: ReactNode;
  variant: 'primary' | 'secondary';
};

const variants = {
  primary: 'bg-primaryButton',
  secondary: 'bg-secondaryButton',
};

function Button({ onClick, children, variant }: ButtonProps): JSX.Element {
  return (
    <button
      className={`w-64 h-10 rounded-xl text-secondary ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
