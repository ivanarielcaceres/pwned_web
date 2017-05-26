import React, {Component} from 'react';

import { Row, Col,Image } from 'react-bootstrap';
var leftMessage = {
      //backgroundColor: '#86B43C',
      color: '#000',
      fontSize: 16,
      textAlign: 'left',
      borderRadius: 5
      
    };
    var rightMessage = {
      //backgroundColor: '#354CC0',
      color: '#000',
      fontSize: 16,
      textAlign: 'right',
      borderRadius: 5
      
    };
    var img ={
        width:600,
        height:400
    }
class Message extends Component{
    render(){
        return(
                <Row>
                    {
                        this.props.pos === 'left'?
                            <Col  md={6} >
                            <div style={leftMessage}>
                                    <p><strong>{this.props.autor}</strong></p> 
                                    {this.props.img !== ''? <Image style={img} src={this.props.img} />: null}
                                    <p>{this.props.message}</p> 
                                

                           </div>
                            </Col>:
                             <Col  mdOffset={6}>
                                <div style={rightMessage}>
                                    <p><strong>{this.props.autor}</strong></p> 
                                    <p>{this.props.message}</p> 
                               </div>
                            </Col>

                    }
                </Row>
        )
    }
}

export default Message;