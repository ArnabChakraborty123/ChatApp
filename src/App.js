import { ChatEngine } from 'react-chat-engine';

import  ChatFeed  from './components/ChatFeed.jsx';
import './App.css';

const App=() => {
  return (
    <ChatEngine
        height="100vh"
        projectID="63badc66-0e19-43e9-9bba-c8195b824b4f"
        userName="BlackJack"
        userSecret="Arnab123"
        renderChatFeed={(chatAppProps) =><ChatFeed{...chatAppProps}/>}
/>
  );
}
export default App;