import React from 'react';
import 'tailwindcss/tailwind.css';

type BackButtonProps = {
  thumbnail: string;
};

function BackButton({ thumbnail }: BackButtonProps): JSX.Element {
  return (
    <div>
      <img className="w-7 h-7" src={thumbnail} alt="" />
    </div>
  );
}
export default BackButton;
