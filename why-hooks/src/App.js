import './App.css';
import ChatRoom from './ChatRoom';
import ChatRoomMigration from './ChatRoomMigration';
import Counter from './Counter';
import CounterMigration from './CounterMigration';
import { Greeting } from './Greeting';

function App() {
  return (
    <div className='App'>
      <Greeting name='Class components' />
      <Counter />
      <CounterMigration />

      <ChatRoom roomId='general' />
      <ChatRoomMigration roomId='general' />
    </div>
  );
}

export default App;
