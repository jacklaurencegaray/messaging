import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import ChatComponent from './Components/Chat/ChatComponent';
import base from './Database/Rebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      messagesLoaded: false,
      users: []
    };

   this.setLoaded = this.setLoaded.bind(this); 
  }

  setLoaded() {
    this.setState({messagesLoaded: true});
  }
  
  componentWillMount() {
    base.bindDoc(`messages/${this.props.pool_id}`, {
      context: this,
      then: () => {
        this.state.messages.sort((a, b) => 
          a.sent_on > b.sent_on? 1: (b.sent_on > a.sent_on)? -1: -1); 

        this.setState({messagesLoaded: true});
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header conversationName={`pool#${this.props.pool_id}`} />
        <ChatComponent 
          setLoaded={this.setLoaded}
          loaded={this.state.messagesLoaded}
          user_id={this.props.user_id} 
          pool_id={this.props.pool_id} 
          messages={this.state.messages}
          users={this.state.users} 
        />     
      </React.Fragment>
    );
  }
}

export default App;
