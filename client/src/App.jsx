import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './App.css';

import { ChannelListContainer, ChannelContainer, Auth } from './components'
const cookies = new Cookies()
const apikey = 'yasqhy2bxhjp';
const authToken = false

const client = StreamChat.getInstance(apikey);



function App() {

  if(!authToken) return <Auth/>
  
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer/>

        <ChannelContainer/>
         
      </Chat>
    </div>
  )
}

export default App
