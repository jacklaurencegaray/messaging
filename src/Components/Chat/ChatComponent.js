
import React from 'react';
import ChatHistory from './ChatHistory/ChatHistory';
import SendMessage from './SendMessage/SendMessage';

import './ChatComponent.css';

class ChatComponent extends React.Component {

    constructor(props) {
        super();
    }

    componentDidUpdate() {
        this.scrollBottom(this.chat);
    }

    scrollBottom(e) {
        e.scrollTop = e.scrollHeight - e.clientHeight;
    }

    render() {
        return (
            <div className='chatComponent'>
                <div className='upperChatComponent' ref={(chat) => this.chat = chat }>
                    <ChatHistory loaded={this.props.loaded} user_id={this.props.user_id} messages={this.props.messages} users={this.props.users} />
                </div>
                <div className='lowerChatComponent'>
                    <SendMessage user_id={this.props.user_id} pool_id={this.props.pool_id} />
                </div>
            </div>
        );
    }
}

export default ChatComponent;