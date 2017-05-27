import React, { Component } from 'react';
import Post from './Post';
import {Col } from 'react-bootstrap';
var problemas =
    [
        {
            id: 12323,
            title:" Error de Python 1",
            imgUrl: "http://www.pandastack.com/wp-content/uploads/2015/08/unable-to-find-vcvarsall-bat.png"   
        },
        {
            id: 1232323322,
            title:" Error de Python 2",
            imgUrl: "https://i.stack.imgur.com/pJwgg.png"   
        },
        {
            id: 1112323,
            title:" Error de Python 3",
            imgUrl: "http://www.cs.bu.edu/courses/cs108/guides/tokenerror.jpg"
        },
        {
            id: 1777232323322,
            title:" Error de Python 4",
            imgUrl: "http://www.pitt.edu/~naraehan/python2/img/nltk-setup-error.png"
        },
       
   ]
 var container={
    
}  
class PostList extends Component{
    render(){
        return(
            <div style={container}>
               {
                  problemas.map((problema) => <Col sm={6}><Post id={problema.id} title={problema.title} imgUrl={problema.imgUrl}/></Col>)
               }
            </div> 
        )
    }

}

export default PostList;