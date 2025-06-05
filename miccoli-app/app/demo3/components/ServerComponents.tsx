import { getUsers } from '@/api/users.api';

export async function ServerComponent() {
  const users = await getUsers();

  return (
    <div>
        {
        users?.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
        }
    </div>
  )
}