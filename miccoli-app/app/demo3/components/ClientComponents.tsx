'use client';
import { PropsWithChildren, useState } from 'react';

export default function ClientComponent({ children}: PropsWithChildren) {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button className="bottone" onClick={() => setValue(s => s+1)}>
        Add
      </button>
      <button className="bottone" onClick={() => { if(value-1 >= 0) setValue(s => s-1) }}>
        Subtract
      </button>
      <p>Value: {value}</p>

      { children }
    </div>
  )
}