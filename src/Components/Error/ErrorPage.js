import './ErrorPage.css';

import React from 'react';

class ErrorPage extends React.Component {

    render() {
        let message;
        if(this.props.type == null) {
            message = 'You have been in this page by a mistake!';
        }
        return (
            <div className='errorpage'>
                <div className='centerVertically'>
                    <div className='content'>
                        <p><span className='smiley'>(;-;)</span></p>
                        <br />
                        <p className='message'>Bummer! {message}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default ErrorPage;