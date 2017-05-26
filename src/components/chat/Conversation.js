import React, {Component} from 'react';
import Message from './Message';
import { Panel } from 'react-bootstrap';
const messages = [
    {
        id: 12323,
        message: "orem Ipsum is simply dummy text of the printin",
        autor: "usuario 1",
        pos: "left",
        url: 'https://i.stack.imgur.com/A59le.jpg'
    },
    {   
        id: 123223,
        message: "orem ard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versio",
        autor: "usuario 2",
        pos: "right",
        url: 'https://i.stack.imgur.com/A59le.jpg'
    },
     {   
        id: 12323232323,
        message: "orem ard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versio",
        autor: "usuario 2",
        pos: "right",
        url: 'https://i.stack.imgur.com/A59le.jpg'
    },
    {
        id: 12312323,
        message: "orem Ipsum is simply dummy text of the printin",
        autor: "usuario 1",
        pos: "left",
        url: ''
    },
    
   
]

var panel = {
    height:800,
    overflowY: 'scroll'
}
class Conversation extends Component{
    render(){
        return(
            <Panel style={panel}>
                {
                messages.map((message) => <Message key={message.id} message={message.message} pos={message.pos} autor={message.autor} img={message.url}/>)
                }  
            </Panel>
                    
               
             
        )
    }
}

export default Conversation;