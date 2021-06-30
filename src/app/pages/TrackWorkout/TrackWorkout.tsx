import React from 'react';
import Header from '../../components/Header/Header';
import SetCard from '../../components/SetCard/SetCard';
import Button from '../../components/Button/Button';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';

function WorkoutOverview(): JSX.Element {
  const history = useHistory();
  return (
    <div className="pt-2 m-6">
      <Header thumbnail={logo} isProfileLinkVisible={false} />

      <main className="flex flex-col mt-6 place-items-center">
        <SetCard name="" sets={[]} />
        <Button onClick={() => history.push('/')} variant="primary">
          save workout
        </Button>
      </main>
    </div>
  );
}

export default WorkoutOverview;
