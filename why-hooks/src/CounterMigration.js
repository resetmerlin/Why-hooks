import React, { useState } from 'react';

export default function CounterMigration() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(43);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = () => {
    setAge(age + 1);
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <button onClick={handleAgeChange}>Increment age</button>
      <p>
        Hello ,{name}. You are {age}.
      </p>
    </>
  );
}
