import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAll = () => {
      const [data, changeData] = useState([])
  const fetchData = () => {
      axios
      .get("http://localhost:3000/view-logs")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>

<div>
    <NavigationBar/>
      <h1><center>View All Entries</center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Name </th>
                  <th>Department</th>
                  <th>Semester</th>
                  <th>Course </th>
                  <th>System Number</th>
                  <th>Login Time</th>
                  <th>Logout Time</th> 
                  <th>Date</th>
                </tr>
                  
              </thead>

              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.dept}</td>
                    <td>{value.sem}</td>
                    <td>{value.course}</td>
                    <td>{value.SystemNumber}</td>
                    <td>{value.LoginTime}</td>
                    <td>{value.LogoutTime}</td>
                    <td>{value.date}</td>
                    <td>
                      <button className="btn btn-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
</div>    
    </div>
  )
}

export default ViewAll







  

  
    