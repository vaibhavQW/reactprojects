import axios from 'axios';
import React, {useState}  from 'react';
import {useHistory, usehistory} from 'react-router-dom'

const AddUser = () => {
   let history = useHistory();
    const [user, setUser] =  useState({
        name:"",
        username:"",
        email:"",
        website:""
    });

    const onInputChange = e => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:3003/users", user);
      history.push("/")
    }
    return(
        <div>
            <h1>Add a user</h1>
            <form onSubmit={e => onSubmit(e)}>
        <div className="mb-3">
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" name="name" value={user.name} onChange={e => onInputChange(e)}/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your UserName" name="username" value={user.username} onChange={e => onInputChange(e)}/>
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your E-mail Address" name="email" value={user.email} onChange={e => onInputChange(e)}/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Phone Number" name="phone" value={user.phone} onChange={e => onInputChange(e)}/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Website Name" name="website" value={user.website} onChange={e => onInputChange(e)}/>
      </div>
      <button className="btn btn-primary bn-block">Add User</button>
      </form>
      </div>
    );
};

export default AddUser;