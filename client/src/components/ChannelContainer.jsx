import React from 'react'
import {Channel, useChatContext} from "stream-chat-react"
import {ChannelInner, CreateChannel, EditChannel, TeamMessage } from "./"

const ChannelContainer = ({isCreating, setIsCreating, isEditing, setIsEditing, createType}) => {
  
  const {channel} = useChatContext()

  if(isCreating){
    // are we creating this channel
    return(
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating}/>
      </div>
    )
  }

  if(isEditing){
    return (<div className="channel__container">
      <EditChannel setIsEditing={setIsEditing}/>
    </div>
    )
  }

  const EmptyState = () => {
    <div className="channel-empty__container">
      <p className="channel-empty__first">This is the beginning</p>
      <p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
    </div>
  }

  return (
    <div className="channel__container">
      <Channel 
      EmptyStateIndicator={EmptyState}
      Message={(messageProps, i) => <TeamMessage key={i} {...messageProps}/>}
      >
        <ChannelInner setIsEditing = {setIsEditing}/>
      </Channel>
    </div>
  )
}

export default ChannelContainer