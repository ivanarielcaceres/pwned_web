import React, { Component } from 'react';
import Post from './Post';
import {Col } from 'react-bootstrap';
var problemas =
    [
        {
            id: 121231767663231111111,
            title:" Error de Python 1",
            imgUrl: "http://www.pandastack.com/wp-content/uploads/2015/08/unable-to-find-vcvarsall-bat.png"   
        },
        {
            id: 12327676323322222222,
            title:" Error de Python 2",
            imgUrl: "https://i.stack.imgur.com/pJwgg.png"   
        },
        {
            id: 112312367121123233333,
            title:" Error de Python 3",
            imgUrl: "http://www.cs.bu.edu/courses/cs108/guides/tokenerror.jpg"
        },
        {
            id: 17772323267633224444,
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
                  problemas.map((problema) => <Col sm={6} key={problema.id}><Post id={problema.id} title={problema.title} imgUrl={problema.imgUrl}/></Col>)
               }
            </div> 
        )
    }

}

export default PostList;