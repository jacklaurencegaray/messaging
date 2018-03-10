import React from 'react';
import './ChatHistory.css';
import Message from './Messages/Message';

class ChatHistory extends React.Component {

    render() {
        var messages;
        if(this.props.loaded) {
            if(this.props.messages.length > 0) {
                messages = this.props.messages.map((element, index) => {
                    let decoratorClass = 'blue';
                    if(element.user_id !== this.props.user_id) 
                        decoratorClass = 'alignRight';

                    return <Message users={this.props.users} 
                                    sentOn={element.sent_on} 
                                    decoratorClass={decoratorClass} 
                                    key={index} 
                                    current_user_id={this.props.user_id} 
                                    user_id={element.user_id} 
                                    message={element.content} />
                });
            } else {
                messages = <Message users={this.props.users} 
                                    user_id='system' 
                                    message='Start the chat!' />;
            }
        } else {
            messages = <Message user_id='system' 
                                message='Loading...' />;
        }

        return (
            <div className='chathistory' id='chatPane'>
                {messages}    
            </div>
        );
    }

}

export default ChatHistory;