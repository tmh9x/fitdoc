import React from 'react';
import 'tailwindcss/tailwind.css';
import CreateWorkoutCard from '../../components/CreateWorkoutCard/CreateWorkoutCard';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import useFetch from '../../hooks/useFetch';
import { Exercise } from '../../../server/wger';
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';

function CreateWorkout(): JSX.Element {
  const exercises = useFetch<Exercise[]>('/api/exercises');
  const history = useHistory();
  if (!exercises) {
    return <div>Not found!</div>;
  }

  return (
    <div className="pt-2 m-6">
      <Header thumbnail={logo} />
      <div className="mt-6">
        <CreateWorkoutCard exercises={exercises} />
      </div>
      <div className="flex place-content-center">
        <Button onClick={() => history.push('/track')} variant="primary">
          save
        </Button>
      </div>
    </div>
  );
}
export default CreateWorkout;
