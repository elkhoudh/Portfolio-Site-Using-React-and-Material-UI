import React from "react";

const VideoChat = props => {
  return (
    <div>
      <iframe
        src="https://tokbox.com/embed/embed/ot-embed.js?embedId=9aad96ab-1297-4431-bd6a-b787c7cb14e0&room=DEFAULT_ROOM&iframe=true"
        allow="microphone; camera"
      />
    </div>
  );
};

export default VideoChat;
