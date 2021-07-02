import React, { useState, useEffect } from 'react';

type WorkoutExerciseProps = {
  name: string;
  onChange: (name: string, sets: number, active: boolean) => void;
};

export default function WorkoutExercise({
  name,
  onChange,
}: WorkoutExerciseProps): JSX.Element {
  const [sets, setSets] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    onChange(name, sets, active);
  }, [sets, active]);

  return (
    <div className="grid grid-cols-3 p-1 mx-auto mb-2 border rounded-xl last:mb-0 bg-secondary w-72">
      <div className="col-start-1 col-end-3 pl-2 text-xs">{name}</div>
      <div className="col-start-3 place-self-end">
        <input
          className="w-10 mr-4 border rounded"
          type="number"
          value={sets}
          onChange={(event) => {
            setSets(+event.target.value);
          }}
        />
        <input
          className="w-4 h-4"
          type="checkbox"
          checked={active}
          onChange={(event) => setActive(event.target.checked)}
        />
      </div>
    </div>
  );
}
