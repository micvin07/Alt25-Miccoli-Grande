export const metadata = {
  title: "Demo2 - Miccoli App",
  description: "Questa è la pagina Demo2 dell'app di Miccoli.",
  openGraph: {
    title: "Demo2 - Miccoli App",
    description: "Questa è la pagina Demo2 dell'app di Miccoli.",
  }
}

import { Posts } from './components/posts';
import { Users } from './components/Users';
import { Suspense } from 'react';

export default async function Demo2() {

  return (
    <main>
      <h1>Demo 2</h1>

      <Suspense fallback={<div id="caricamento">Caricamento utenti...</div>}>
        <Users />
      </Suspense>

      <Suspense fallback={<div id="caricamento">Caricamento post...</div>}>
        <Posts />
      </Suspense>
    </main>
  )
}