import React from 'react';
import 'tailwindcss/tailwind.css';
import therock from '../../assets/therock.png';

function ProfileForm(): JSX.Element {
  return (
    <>
      <form className="grid gap-4 p-4 rounded-xl w-80 bg-secondary">
        <div className="w-40 h-40 border rounded-full place-self-center">
          <img className="object-cover rounded-full" src={therock} />
        </div>
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Firstname"
          value="Dwayne"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Lastname"
          value="Johnson"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Age"
          value="49"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Gender"
          value="male"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Height"
          value="196 cm"
        />
        <input
          className="pt-2 pb-2 text-center border rounded-xl"
          type="text"
          placeholder="Weight"
          value="119 kg"
        />
      </form>
    </>
  );
}

export default ProfileForm;
