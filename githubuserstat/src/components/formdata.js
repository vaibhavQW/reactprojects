import React, { Component } from 'react'
import './formdata.css'

export default class Formdata extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            follower:'',
            following:'',
            public_repos:'',
            visit_page:'',
            avatar:''
        }
       
    };
    
   
    render() {
        
        return (
            <div>
                <img className="imge" src= {this.props.udata.avatar_url} alt="  "></img>
                <div className="details">
                    <div className="compon">Followers: {this.props.udata.followers}</div>
                    <div className="compon">Following: {this.props.udata.following}</div>
                    <div className="compon">public repos" {this.props.udata.public_repos}</div>
                </div>
                <div className="urls">Page:{this.props.udata.url}</div>
                
            </div>
        )
    }
}
