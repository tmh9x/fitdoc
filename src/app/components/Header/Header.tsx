import React from 'react';
import 'tailwindcss/tailwind.css';

type HeaderProps = {
  thumbnail: string;
  name: string;
};

function Header({ thumbnail, name }: HeaderProps): JSX.Element {
  return (
    <div className="text-secondary flex place-content-center text-3xl border-b-2 border-primary pb-2">
      <img className="w-7 h-7 mt-1 " src={thumbnail} />
      {name}
    </div>
  );
}
export default Header;
