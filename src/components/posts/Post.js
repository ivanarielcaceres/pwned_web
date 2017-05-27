import React, { Component } from 'react';
import {Image } from 'react-bootstrap';
var img ={
        width:360,
        height:250
    }

class Post extends Component{
    render(){
        return(
           <div>
               <p>{this.props.title}</p>
               <Image style={img} src={this.props.imgUrl} />
           </div>
        )
    }

}

export default Post;