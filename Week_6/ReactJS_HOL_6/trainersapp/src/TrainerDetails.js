import React from 'react';
import { useParams } from 'react-router-dom';
import trainerMock from './trainermock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainerMock.find((t) => t.trainerId === id);

  if (!trainer) {
    return <div>Trainer not found!</div>;
  }

  return (
    <div>
      <h2>Trainers Details</h2>
      <h3>{trainer.name} ({trainer.technology})</h3>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <h4>Skills</h4>
      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetails;