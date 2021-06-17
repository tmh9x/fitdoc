import React, { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';

type TimerProps = {
  onClick: () => void;
  children?: ReactNode;
};

function Timer({ onClick, children }: TimerProps): JSX.Element {
  return (
    <div className="w-20">
      <button
        className="w-20 h-8 rounded-2xl bg-primaryButton text-secondary"
        onClick={onClick}
      >
        {children}
      </button>
      <h1 className="text-secondary text-center text-3xl pt-1">00:00</h1>
    </div>
  );
}

export default Timer;
