import React from 'react';
const Card = (prop) => {
  return (
    <div className='card border-info mb-3' style={{ maxWidth: '18rem' }}>
      <div className='card-header'>Name: {prop.pet.name}</div>
      <div className='card-body text-info'>
        <h5 className='card-title'>My pet info</h5>
        <p className='card-text'>Age: {prop.pet.age}</p>
        <p className='card-text'>Breed: {prop.pet.breed}</p>
      </div>
    </div>
  );
};

export default Card;
