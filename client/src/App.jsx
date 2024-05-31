import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StreamChat } from 'Stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './App.css'

const apikey = 'yasqhy2bxhjp';
const client = StreamChat.getInstance(apikey);

function App() {
  
  return (
    <div className="app__ wrapper">
      <Chat client={client}>
        <ChanellListContainer/>

        <ChannelContainer/>
         
      </Chat>
    </div>
  )
}

export default App
