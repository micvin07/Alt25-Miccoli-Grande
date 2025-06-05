export const metadata = {
  title: "Demo2 - Miccoli App",
  description: "Questa è la pagina Demo2 dell'app di Miccoli.",
  openGraph: {
    title: "Demo2 - Miccoli App",
    description: "Questa è la pagina Demo2 dell'app di Miccoli.",
  }
}

import { User } from '../../model/user';

async function getData(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store'
  })
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return res.json();
}

export default async function Demo2() {
  const data = await getData();

  return (
    <main>
      <h1>Demo 2</h1>
      {
        data?.map(user => {
          return <li key={user.id}>{user.name}</li>
        })
      }
    </main>
  )
}