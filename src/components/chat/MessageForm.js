import React, { Component } from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            menssage: ''
        }
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage(e){
       // e.preventDefault();
        this.setState({
            menssage: e.target.value
        })
        console.log(this.state.menssage);
    }
    render(){
        return(
         <form>
            <FormGroup controlId="formBasicText">
                <FormControl
                    ref="message"
                    type="text"
                    value={this.state.menssage}
                    placeholder="new message..."
                    onChange={this.sendMessage}
                />
            </FormGroup>
      </form>
        )
    }
}

export default MessageForm;