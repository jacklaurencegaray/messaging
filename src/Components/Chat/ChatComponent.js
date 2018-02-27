
import React from 'react';
import ChatHistory from './ChatHistory/ChatHistory';
import SendMessage from './SendMessage/SendMessage';

import './ChatComponent.css';

class ChatComponent extends React.Component {

    constructor(props) {
        super();
        this.state = {
            userToName: [],
            processedIDs: []
        };

        this.setChatHistoryState = this.setChatHistoryState.bind(this);
        this.pushToProcessed = this.pushToProcessed.bind(this);
    }

    setChatHistoryState(obj) {
        this.setState(obj);
    }

    componentWillUpdate() {
        console.log(this.state);
    }

    pushToProcessed(id) {
        let processedIds = this.state.processedIDs.slice();
        processedIds.push(id);
        this.setState({
            processedIDs: processedIds
        });
    }

    render() {
        return (
            <div className='chatComponent'>
                <div className='upperChatComponent'>
                    <ChatHistory pushToProcessed={this.pushToProcessed} processedIds={this.state.processedIDs} setChatHistoryState={this.setChatHistoryState} userToName={this.state.userToName} setLoaded={this.props.setLoaded} loaded={this.props.loaded} user_id={this.props.user_id} messages={this.props.messages} />
                </div>
                <div className='lowerChatComponent'>
                    <SendMessage user_id={this.props.user_id} pool_id={this.props.pool_id} />
                </div>
            </div>
        );
    }
}

export default ChatComponent;