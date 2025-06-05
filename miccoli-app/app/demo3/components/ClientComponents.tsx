'use client';
import { PropsWithChildren, useState } from 'react';

export default function ClientComponent({ children}: PropsWithChildren) {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(s => s+1)}>
        Add
      </button>
      <button onClick={() => { if(value-1 >= 0) setValue(s => s-1) }}>
        Subtract
      </button>
      <p>Value: {value}</p>

      { children }
    </div>
  )
}