import React from 'react';
import 'tailwindcss/tailwind.css';
import BackButton from '../../components/BackButton/BackButton';
import ProfileButton from '../../components/ProfileButton/ProfileButton';

type HeaderProps = {
  thumbnail: string;
  name: string;
  isBackButtonVisible?: boolean;
  isProfileButtonVisible?: boolean;
};

function Header({
  thumbnail,
  name,
  isBackButtonVisible = true,
  isProfileButtonVisible,
}: HeaderProps): JSX.Element {
  return (
    <header className="text-secondary grid grid-cols-3 text-3xl border-b-2 border-primary pb-2">
      <div className="self-center">
        {isBackButtonVisible && <BackButton thumbnail="back.png" />}
      </div>
      <div className="flex place-items-center justify-center">
        <img className="w-7 h-7" src={thumbnail} />
        {name}
      </div>
      <div className="justify-self-end self-center">
        {isProfileButtonVisible && <ProfileButton thumbnail="profile.png" />}
      </div>
    </header>
  );
}
export default Header;
