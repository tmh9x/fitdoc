import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';

function ProfileLink(): JSX.Element {
  return (
    <Link to="/profile">
      <img className="w-7" src={profile} />
    </Link>
  );
}
export default ProfileLink;
