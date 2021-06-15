import React from 'react';
import 'tailwindcss/tailwind.css';

type ProfileButtonProps = {
  thumbnail: string;
};

function ProfileButton({ thumbnail }: ProfileButtonProps): JSX.Element {
  return (
    <div>
      <img className="w-7 h-7" src={thumbnail} alt="" />
    </div>
  );
}
export default ProfileButton;
