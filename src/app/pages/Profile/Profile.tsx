import React from 'react';
import Header from '../../components/Header/Header';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';
import Button from '../../components/Button/Button';

function Profile(): JSX.Element {
  return (
    <div className="pt-2 pb-4 mx-2">
      <Header thumbnail={logo} isProfileLinkVisible={false} />

      <main className="flex flex-col pt-6 place-items-center">
        <div className="pb-4">
          <ProfileForm />
        </div>
        <Button variant="primary">save</Button>
      </main>
    </div>
  );
}

export default Profile;
