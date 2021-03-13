import React, { Component } from 'react'
import Form from './components/form'
import Header from './components/header'
import Formdata from './components/formdata'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      uname:'',
      udata:'',
    };
    this.handleInput = this.handleInput.bind(this);
    this.getUser = this.getUser.bind(this);
  }
 
  getUser(){
    fetch(`https://api.github.com/users/${this.state.uname}`)
      .then(response => response.json())
      .then(data =>  this.setState({udata:data}))
      .catch(error => console.error(error));
  }

  handleInput(event){
        this.setState({
          uname:event.target.value
        });
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Form handleInput={this.handleInput} uname={this.state.uname} getUser={this.getUser}></Form>
        <Formdata udata={this.state.udata}></Formdata>
      </div>
    )
  }
}
