'use client';

import Link from 'next/link';

export default function Error(
  { error, reset }: { error: Error, reset: () => void}
) {
  return (
    <div>
      <h2>Qualcosa è andato male</h2>
      <Link href="/">Torna alla Home</Link>
      <hr/>
      <button onClick={reset}>Prova di nuovo!!</button>
    </div>
  )
}