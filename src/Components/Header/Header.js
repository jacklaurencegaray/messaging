import './Header.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/fontawesome-free-solid';

class Header extends React.Component {
    render() {
        return (
            <Grid fluid className='fullWidth'>
                <Row className='navigation'>
                    <Col md={4} xs={4}>
                        <a href='../../back.php'><FontAwesomeIcon icon={faChevronLeft} /></a>
                    </Col>
                    <Col xs={4} md={4} className='textCenter'>
                        <span className='conversationName'>{this.props.conversationName}</span>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default Header;