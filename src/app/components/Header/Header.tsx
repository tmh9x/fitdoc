import React from 'react';
import 'tailwindcss/tailwind.css';
import BackButton from '../../components/BackButton/BackButton';
import ProfileLink from '../../components/ProfileLink/ProfileLink';
import back from '../../assets/back.png';

type HeaderProps = {
  thumbnail: string;
  isBackButtonVisible?: boolean;
  isProfileLinkVisible?: boolean;
};

function Header({
  thumbnail,
  isBackButtonVisible = true,
  isProfileLinkVisible,
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
        {isProfileLinkVisible && <ProfileLink />}
      </div>
    </header>
  );
}
export default Header;
