'use client';
import { useState } from 'react';

export default function ClientComponent() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h2>Client Component</h2>
      <button onClick={() => setValue(s => s+1)}>
        Add
      </button>
      <button onClick={() => { if(value-1 >= 0) setValue(s => s-1) }}>
        Subtract
      </button>
      <p>Value: {value}</p>
    </div>
  )
}