import axios from 'axios';
import React, {useState, useEffect}  from 'react';
import {useHistory, useParams} from 'react-router-dom'

const EditUser = () => {
   let history = useHistory();
   const {id} = useParams();
    const [user, setUser] =  useState({
        name:"",
        username:"",
        email:"",
        website:""
    });

    const onInputChange = e => {
        setUser({...user, [e.target.name]:e.target.value})
    }
    useEffect(() => {
        loadUser();

    }, [])

    const onSubmit = async e => {
      e.preventDefault();
      await axios.put("http://localhost:3003/users", user);
      history.push("/")
    }

    const loadUser = async e =>{
        const result = await axios.get("http://localhost:3003/users/"+id);
        setUser(result.data);
    }
    return(
        <div>
            <h1>Edit a user</h1>
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
      <button className="btn btn-warning bn-block">Update User</button>
      </form>
      </div>
    );
};


export default EditUser;