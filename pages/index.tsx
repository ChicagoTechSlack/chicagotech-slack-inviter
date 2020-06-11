import React from "react";

class App extends React.Component {
  static async getInitialProps({ res }) {
    // Forward to the Shared Slack Invite Link
    // TODO: Make this nicer
    const inviteLink = process.env.SLACK_INVITE_LINK;
    res.writeHead(302, { Location: inviteLink });
    res.end();
  }
}
export default App;
