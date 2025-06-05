import { getUsers } from '@/api/users.api';

export async function ServerComponent() {
  const users = await getUsers();

  return (
    <div>
        <h2>Server Component</h2>
        {
        users?.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
        }
    </div>
  )
}