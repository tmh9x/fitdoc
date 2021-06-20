import React from 'react';
import 'tailwindcss/tailwind.css';
import Button from '../Button/Button';

type MessageCardProps = {
  thumbnail: string;
  message: string;
};

function MessageCard({ thumbnail, message }: MessageCardProps): JSX.Element {
  return (
    <div className="p-6 text-center w-80 text-secondary rounded-xl bg-primary">
      <img className="w-40 mx-auto" src={thumbnail} alt="" />
      <div className="p-6 text-xl">{message}</div>
      <div>
        <Button children="CONTINUE" variant="secondary"></Button>
      </div>
    </div>
  );
}

export default MessageCard;
