import React, { useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import './App.css';
import 'steam-chat-react/dist/css/index.css' // for a better looking chat app

import { ChannelListContainer, ChannelContainer, Auth } from './components'
const cookies = new Cookies()
const apikey = 'yasqhy2bxhjp';o

const authToken = cookies.get("token")
console.log(authToken)

const client = StreamChat.getInstance(apikey);

if (authToken) {
  client.connectUser({
    id: cookies.get("userId"),
    name: cookies.get("username"),
    fullname: cookies.get("fullname"),
    image: cookies.get("avatarURL"),
    hashedPassword: cookies.get("hashedPassword"),
    phoneNumber: cookies.get("phoneNumber"),

  }, authToken)

}

function App() {
  const [createType, setCreateType] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)


  if (!authToken) return <Auth />

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />

        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />

      </Chat>
    </div>
  )
}

export default App
