import React from 'react'

const TeamChannelList = ({children, error = false, loading, type}) => {
  if(error) {
    return type == 'team'?(
        <div className="team-channel-list">
            <p className="team-channel-list__message">
                connection error
            </p>
        </div>

    ) : null

    if(loading){
        
    }
  }

  if(loading){

  }
}

export default TeamChannelList