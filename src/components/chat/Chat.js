import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Conversation from './Conversation';
import MessageForm from './MessageForm';

class Chat extends Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col md={10}>
                        <Conversation/>
                    </Col>
                  </Row>
                <Row>
                    <Col md={10}>
                        <MessageForm/>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default Chat;