import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/fontawesome-free-solid';

import './Message.css';
import React from 'react';

class Message extends React.Component {

    constructor(props) {
        super(props);

        this.pushNewID = this.pushNewID.bind(this);

        this.pushNewID(this.props.user_id);
        this.user_id = this.props.user_id;
        this.proxy_url =  "https://cors-anywhere.herokuapp.com/";
        if(this.user_id === 'system') {
            this.user_id = (
                <React.Fragment>
                    <FontAwesomeIcon icon={faCog} />
                    <span> :</span>
                </React.Fragment>
            );
        } else {
            if(typeof this.props.userToName[this.user_id] == 'undefined' &&
                typeof this.props.processedIds[this.user_id] === 'undefined') {
                this.pushNewID(this.user_id);
                fetch(this.proxy_url + 'https://sharetaxi-usertoname.herokuapp.com/user/' + this.props.user_id, {
                    headers: {
                        'content-type': 'application/json'
                    },
                }).then(response => {
                    return response.json();
                }).then(data => {
                    this.props.userToName[this.user_id] = data.name;
                    this.props.setChatHistoryState({
                        userToName: this.props.userToName
                    }); 
                });
            }
        }        
    }


    pushNewID(id) {
        this.props.pushToProcessed(id);
    }

    render() {
        var sentData = new Date(this.props.sentOn);
        var sentOn = sentData.getHours() + ":" + sentData.getMinutes();

        return (
            <div className='messageComponent' onClick={this.showTime} onTouchStart={this.showTime}>
                <div className={`message ${this.props.decoratorClass}`}>
                    { this.props.userToName[this.user_id] } {this.props.message}
                    <span className='timeslot hide'>{`${sentOn}`}</span>
                </div>
            </div>
        );
    }

}

export default Message;