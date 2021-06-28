import React from 'react';
import { useHistory } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

type BackButtonProps = {
  thumbnail: string;
};

function BackButton({ thumbnail }: BackButtonProps): JSX.Element {
  const history = useHistory();
  return (
    <button onClick={() => history.goBack()}>
      <img className="w-7 h-7" src={thumbnail} />
    </button>
  );
}
export default BackButton;
