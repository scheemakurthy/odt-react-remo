import React, { useEffect, useState } from 'react'
import { base_url, paths } from '../App'

export const UpdateRecord = () => {
  const [employees, setemployees] = useState([]);
  const [toUpdateEmp, settoUpdateEmp] = useState(null);
  const getData = () => {
    fetch(base_url + paths.employee + ".json")
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        setemployees(res)
      }).catch(e => {
        console.log(e);
      })
  }
  const handleEmpPut = () => {
    fetch(base_url + paths.employee + "/" + toUpdateEmp + ".json", {
      method: 'PUT', // Replaces entire object,
      body:
        JSON.stringify({
          name: employees[toUpdateEmp].name.split("_")[0] + "_" + Math.random() * 1000,
          email: "SkyOnPut@email.com",
          // address: "Galaxy",
          // color: "blue"
        })
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        settoUpdateEmp(null)
        getData()
      }).catch(e => {
        console.log(e);
      })
  }
  const handleEmpPatch = () => {
    fetch(base_url + paths.employee + "/" + toUpdateEmp + ".json", {
      method: 'PATCH', // Merges existing object with new values sent,
      body:
        JSON.stringify({
          name: employees[toUpdateEmp].name.split("_")[0] + "_" + Math.random() * 1000,
        })
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        settoUpdateEmp(null)
        getData()
      }).catch(e => {
        console.log(e);
      })
  }
  const handleEmpDelete = () => {
    fetch(base_url + paths.employee + "/" + toUpdateEmp + ".json", {
      method: 'DELETE', // Merges existing object with new values sent,

    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        settoUpdateEmp(null)
        getData()
      }).catch(e => {
        console.log(e);
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div><h3>Update Employee record</h3>
      <h6>Click on employee to update :
      </h6>
      {employees && Object.keys(employees).map((key, index) => {
        let currentObject = employees[key];
        return (<div onClick={e => {
          settoUpdateEmp(key)
        }}>
          {index + 1}.
          Id : {currentObject?.empId} &nbsp;&nbsp;&nbsp;
          Name :  {currentObject?.name} &nbsp;&nbsp;&nbsp;
          Email : {currentObject?.email} &nbsp;&nbsp;&nbsp;
          Address : {currentObject?.address} &nbsp;&nbsp;&nbsp;
          Selected Color : {currentObject?.color} &nbsp;&nbsp;&nbsp;
        </div>)
      })}
      {toUpdateEmp && <div style={{ color: 'green', fontFamily: 'fantasy' }}>
        selected <b>{employees[toUpdateEmp].name}</b> to update/delete
      </div>}
      <button onClick={() => {
        handleEmpPut()
      }} disabled={!toUpdateEmp}>Replace entire emp object</button>
      <button onClick={() => {
        handleEmpPatch()
      }} disabled={!toUpdateEmp}>Update fields in emp obj</button>
      <button onClick={() => {
        handleEmpDelete()
      }} disabled={!toUpdateEmp}>Delete emp</button>
    </div>
  )
}
