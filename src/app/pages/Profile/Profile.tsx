import React from 'react';
import Header from '../../components/Header/Header';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';
import Button from '../../components/Button/Button';

function Profile(): JSX.Element {
  return (
    <div className="pt-2 m-6">
      <Header thumbnail={logo} isProfileLinkVisible={false} />

      <main className="flex flex-col mt-6 place-items-center">
        <ProfileForm />
        <Button variant="primary">save</Button>
      </main>
    </div>
  );
}

export default Profile;
