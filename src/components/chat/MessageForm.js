import React, { Component } from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import firebase,{firebaseDatabaseRef } from '../../firebase/conexion.js';
class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            message: ''
        }
        this.handleMessage = this.handleMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        
    }
    handleMessage(e){
       // e.preventDefault();
        this.setState({message: e.target.value});
        console.log(this.state.message);
    }
    sendMessage(e){
        e.preventDefault();
        //Hacemos el push al firebase
        console.log(`Hacemos el push al firebase ${this.state.message}`);
        //Creamos el objeto json
        let message ={
            message: this.state.message,
            auto: 'msvzero'
        }
        let messageRef = firebaseDatabaseRef.child(`mensajes`).push(message)
    }
    render(){
        return(
         <form onSubmit={this.sendMessage}>
            <FormGroup controlId="formBasicText">
                <FormControl
                    ref="message"
                    type="text"
                    value={this.state.message}
                    placeholder="new message..."
                    onChange={this.handleMessage}
                />
            </FormGroup>
      </form>
        )
    }
}

export default MessageForm;