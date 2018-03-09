import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/fontawesome-free-solid';

import './Message.css';
import React from 'react';

class Message extends React.Component {

    constructor(props) {
        super(props);

        this.user_id = this.props.user_id;
        if(this.user_id === 'system') {
            this.user_id = (
                <React.Fragment>
                    <FontAwesomeIcon icon={faCog} />
                    <span> </span>
                </React.Fragment>
            );
            this.color = 'default';
        } else if(this.user_id === this.props.current_user_id) {
            this.user_id = 'You';
            this.color = 'default';
        } else {
            this.user_id = this.props.users[this.user_id];
            this.color = 'blueText';
        }
    }

    render() {
        var sentData = new Date(this.props.sentOn);
        var sentOn = sentData.getHours() + ":" + sentData.getMinutes();

        return (
            <div className='messageComponent' onClick={this.showTime} onTouchStart={this.showTime}>
                <div className={`message ${this.props.decoratorClass}`}>
                <span className={`${this.color}`}> { this.user_id }</span>: {this.props.message }
                    <span className='timeslot hide'>{`${sentOn}`}</span>
                </div>
            </div>
        );
    }

}

export default Message;