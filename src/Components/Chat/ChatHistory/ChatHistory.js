import React from 'react';
import './ChatHistory.css';
import Message from './Messages/Message';

class ChatHistory extends React.Component {

    constructor(props) {
        super();
    }

    componentDidMount() {
        this.props.pushToProcessed(this.props.user_id);                        
    }

    render() {
        var messages;
        if(this.props.loaded) {
            if(this.props.messages.length > 0) {
                messages = this.props.messages.map((element, index) => {
                    let decoratorClass = 'alignRight blue';
                    if(element.user_id != this.props.user_id) 
                        decoratorClass = 'alignLeft';

                    return <Message pushToProcessed={this.props.pushToProcessed} processedIds={this.props.processedIds} sentOn={element.sent_on} setChatHistoryState={this.props.setChatHistoryState} userToName={this.props.userToName} decoratorClass={decoratorClass} key={index} current_user_id={this.props.user_id} user_id={element.user_id} message={element.content} />
                });
            } else {
                messages = <Message pushToProcessed={this.props.pushToProcessed} setUserToName={this.props.setUserToName} userToName={this.props.userToName} user_id='system' message='Start the chat!' />;
            }
        } else {
            messages = <Message pushToProcessed={this.props.pushToProcessed} user_id='system' message='Loading...' userToName={this.props.userToName} />;
        }

        return (
            <div className='chathistory'>
                {messages}    
            </div>
        );
    }

}

export default ChatHistory;