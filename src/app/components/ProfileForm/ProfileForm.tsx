import React from 'react';
import 'tailwindcss/tailwind.css';
import user from '../../assets/user.png';

function ProfileForm(): JSX.Element {
  return (
    <>
      <form className="grid gap-4 p-4 rounded-xl w-80 bg-secondary">
        <div className="w-40 h-40 border rounded-full place-self-center">
          <img src={user} />
        </div>
        <input type="file" placeholder="" />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Firstname"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Lastname"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Age"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Gender"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Height"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Weight"
        />
      </form>
    </>
  );
}

export default ProfileForm;
