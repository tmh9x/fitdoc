import React from 'react';
import 'tailwindcss/tailwind.css';
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';

type MessageCardProps = {
  thumbnail: string;
  setShowMessageCard: (value: boolean) => void;
};

function MessageCard({ thumbnail }: MessageCardProps): JSX.Element {
  const history = useHistory();
  return (
    <div className="grid pt-6 pb-6 place-items-center w-72 text-secondary rounded-xl bg-primary">
      <img className="w-40" src={thumbnail} alt="" />
      <p className="p-6 text-3xl">Congratulations!</p>
      <p className="mb-4">Yor're done for today.</p>
      <div>
        <Button onClick={() => history.push('/')} variant="secondary">
          continue
        </Button>
      </div>
    </div>
  );
}

export default MessageCard;
