import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddLabEntry = () => {
const[input, changeInput]=useState({
        name: "",
        dept: "",
        sem: "",
        course: "",
        SystemNumber: "",
        LoginTime: "",
        LogoutTime: "",
        Date: ""
        })

    const inputhandler=(event)=>{
        changeInput({
            ...input,[event.target.name]:event.target.value
        })
    }
    const readValue= () =>{
        console.log(input)
        axios.post("http://localhost:3000/add-entry",input).then(
            (Response) =>{
                console.log(Response.data)
                alert("Lab Entry Added Successfully")
            }
        ).catch(
            (Error) =>{
                console.log(Error)
            }
        )
    }
  return (
    <div>
        <NavigationBar/>
        <h1><center>Add Entry</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                         <div className="col col-12 col-sm-6">
    <label className="form-label">Name</label>
    <input
        type="text"
        className="form-control"
        required
        name="name"
        value={input.name}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Department</label>
    <input
        type="text"
        className="form-control"
        required
        name="dept"
        value={input.dept}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Semester</label>
    <input
        type="text"
        className="form-control"
        required
        name="sem"
        value={input.sem}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Course</label>
    <input
        type="text"
        className="form-control"
        name="course"
        value={input.course}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">System Number</label>
    <input
        type="number"
        className="form-control"
        name="SystemNumber"
        value={input.SystemNumber}
        onChange={inputhandler}
    />
</div>


<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
   <label className="form-label">Login Time</label>
    <input
        type="text"
        className="form-control"
        name="LoginTime"
        value={input.LoginTime}
        onChange={inputhandler}
    />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Logout Time</label>
    <input
        type="text"
        className="form-control"
        name="LogoutTime"
        value={input.LogoutTime}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Date</label>
    <input
        type="date"
        className="form-control"
        name="date"
        value={input.date}
        onChange={inputhandler}
    />
</div>
<div className="col-12 text-center">
    <button className="btn btn-success" onClick={readValue}>
        Submit
    </button>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default AddLabEntry




     