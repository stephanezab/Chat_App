import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

const TeamChannelPreview = ({ channel, type}) => {
    const { channel: activeChannel, client} = useChatContext()

    const ChannelPreview = () => (
        <p className="channel-preview__item">
            # { channel?.data?.name || channel?.data?.id}
        </p>
    )

    const DirectPreview = () => {
        
        const members =  Object.values(channel.state.members).filter(({user}) => user.id != client.userID)
        // channel.state.member return { id:{object}, ...}
        // client ID is our ID

        return (
            <div className="channel-preview__item single">
                <Avatar
                image={members[0]?.user?.image}
                name={members[0]?.user?.fullName}
                />
                <p>{members[0]?.user?.fullName}</p>
            </div>

        )
    }


    return (
        <div>

        </div>
    )
}

export default TeamChannelPreview