import React from 'react';
import 'tailwindcss/tailwind.css';

type HeaderProps = {
  thumbnail: string;
};

function Header({ thumbnail }: HeaderProps): JSX.Element {
  return (
    <div className="flex pb-2 text-3xl border-b-2 text-secondary place-content-center border-primary">
      <img className="pr-1 mt-1 w-7 h-7" src={thumbnail} />
      <span>fitdoc</span>
    </div>
  );
}
export default Header;
