"use client";

import useUsers from '../store/users.store';

export default function Demo5() {
  const users = useUsers(state => state.users)
  const remove = useUsers(state => state.remove)
  const add = useUsers(state => state.add)

  return (
    <main>
      <h1>Demo 6</h1>

      <button className="bottone" onClick={() => {
        const now = Date.now();
        add({id: now, name: `User${now}`})
      }}>Aggiungi utente</button>

    <table>
      {        
        users.map(item => {
          return <tr className="riga" key={item.id}>
            <td className='nome'>{item.name}</td>
            <td><button className="rimuovi" onClick={() => remove(item.id)}>Rimuovi</button></td>
          </tr>
        })
      }
      </table>
    </main>
  )
}