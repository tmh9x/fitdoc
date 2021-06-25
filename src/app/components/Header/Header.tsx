import React from 'react';
import 'tailwindcss/tailwind.css';
import BackButton from '../../components/BackButton/BackButton';
import ProfileButton from '../../components/ProfileButton/ProfileButton';
import back from '../../assets/back.png';
import profile from '../../assets/profile.png';

type HeaderProps = {
  thumbnail: string;
  isBackButtonVisible?: boolean;
  isProfileButtonVisible?: boolean;
};

function Header({
  thumbnail,
  isBackButtonVisible = true,
  isProfileButtonVisible,
}: HeaderProps): JSX.Element {
  return (
    <header className="grid grid-cols-3 pb-2 text-3xl border-b-2 text-secondary border-primary">
      <div className="self-center">
        {isBackButtonVisible && <BackButton thumbnail={back} />}
      </div>
      <div className="flex justify-center place-items-center">
        <img className="pr-1 w-7 h-7" src={thumbnail} />
        <span>fitdoc</span>
      </div>
      <div className="self-center justify-self-end">
        {isProfileButtonVisible && <ProfileButton thumbnail={profile} />}
      </div>
    </header>
  );
}
export default Header;
