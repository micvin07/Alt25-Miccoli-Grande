import ClientComponent from './components/ClientComponents';
import { ServerComponent } from './components/ServerComponents';

export default function Demo3() {

  return (
    <main>
      <div>
        <h1>Demo 3</h1>

        <h2>Client component only</h2>
        <ClientComponent />

        <h2>Server component only</h2>
        <ServerComponent />

        <h2>Server component inside Client Component</h2>
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>

      </div>
    </main>
  )
}