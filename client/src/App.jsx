import React from 'react'
import { StreamChat } from 'Stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './App.css'

import { ChannelListContainer, ChannelContainer } from './components'

const apikey = 'yasqhy2bxhjp';
const client = StreamChat.getInstance(apikey);

function App() {
  
  return (
    <div className="app__ wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer/>

        <ChannelContainer/>
         
      </Chat>
    </div>
  )
}

export default App
