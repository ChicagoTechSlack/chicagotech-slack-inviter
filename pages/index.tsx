import React from "react";

const App = () => {
  // Forward to the Shared Slack Invite Link
  const inviteLink = process.env.SLACK_INVITE_LINK;
  const refreshContentAttr = `0;url=${inviteLink}`;
  return <meta httpEquiv="refresh" content={refreshContentAttr} />;
};
export default App;
