
import './SendMessage.css';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { db } from '../../../Database/Rebase';
import React from 'react';

class SendMessage extends React.Component {

    constructor(props) {
        super();
        this.onSendMessage = this.onSendMessage.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

        this.submitButton = false;
    }

    onSendMessage() {
        var messageInput = document.getElementById('message');
        var messageContent = messageInput.value;
        var user_id = this.props.user_id;
        if(messageInput.value.trim() !== '') {
            let message = db.collection('messages').doc(this.props.route_id);

            message.get().then(doc => {
                let prev_messages;
                
                if(doc.exists) {
                    prev_messages = doc.data().messages;
                } else {
                    prev_messages = [];
                }

                message.set({
                    messages: [
                        ...prev_messages,                      
                        {
                            user_id: user_id, 
                            content: messageContent,
                            sent_on: new Date()
                        },
                    ]
                }, {merge: true});

                this.messageInput.value = "";
            });
        }
    }

    submitHandler(event) {
        if(event.key === 'Enter') 
            this.submitButton.click();
    }

    render() {
        return (
            <div className='sendMessage'>
                <Grid fluid className='fullHeight'>
                    <Row>
                        <Col xs={9} md={10}>
                            <input type='text' ref={messageInput => this.messageInput = messageInput} name='message' id='message' onKeyPress={this.submitHandler}/>
                        </Col>
                        <Col xs={3} md={2}>
                            <button ref={(e) => this.submitButton = e} onClick={this.onSendMessage}>Send</button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default SendMessage;