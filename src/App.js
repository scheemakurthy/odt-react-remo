
import './App.css';

import { Welcome } from "./components/Welcome";
import { useState } from "react";
import { NewRecord } from './components/NewRecord';
import { UpdateRecord } from './components/UpdateRecord';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
export const base_url =
  "https://react-demo-97e86-default-rtdb.asia-southeast1.firebasedatabase.app";
export const paths = {
  employee: "/employee",
};
// environmnetal variables
function App() {
  const [name, setname] = useState("");
  const [id, setid] = useState("");
  const [address, setaddress] = useState("");
  const fetchMyEmployeesData = () => {
    fetch(base_url + paths.employee + ".json")
      .then((res) => {
        console.log(res);
        return res.json()
      })
      .then((res) => {
        console.log(res);
        setname(res.name);
        setid(res.id);
        setaddress(res.address);
        throw Error("random")
      }).catch(e => {
        console.log(e);
      })
  };
  const handleAddingNewrecord = () => {
    fetch(base_url + paths.postUrl + ".json", {
      method: "POST",
      body: JSON.stringify({
        name: "React" + Math.random(),
        id: 2,
        address: "us",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>

      <Welcome />

     <div style={{margin:'20px',padding:'10px'}}>
     <session1><h3>Session 1 : React basics</h3>
        <div><h5>Topics Covered :</h5><ul>
          <li>Set up . From scratch using npx command, adding to existing js app (CDN)</li>
          <li>Components
            <ul type='square'>
              <li >Controlled, uncontrolled</li>
              <li >statefull, stateles</li>
            </ul>
          </li>
          <li >state and props</li>
          <li >Life cycle methods</li>
          <li >JSX</li>
          <li >Dev tools</li>
        </ul></div></session1>
      <session2><h3>Session 2 : Continuation React topics</h3>
        <div><h5>Topics Covered :</h5>
          <ul>
            <li>Recap of session 1</li>
            <li>Life cyle methods continuation</li>
            <li>Forms and events</li>
            <li>Hooks, useState, useEffect,useMemo, useCallback</li>
            <li>Routes</li>
            <li>npm modules addition</li>
          </ul>
        </div></session2>
      <sesion3><h3>Session 3 : Backend Integration </h3>
        <div><h5>Topics Covered :</h5>
          <ul>
            <li>Recap of session 2</li>
            <li>App creation</li>
            <li>adding events for elements,arrow functions</li>
            <li>Firebase intro,why we need application layer, CRUD, REST, what firebase does in this context, why we picked fire base for example in session, and that java/c#/node js act as middle man b/w presentation layer and persistance layer</li>
            <li>CRUD topic - middle man b/w ui and db and making CREATE/POST and GET requets</li>
            <li>promises, fetch, async await, callback, MDN Web API's doc</li>
          </ul>
        </div>

        <div>
          <div>-->Submit to create a request and see the below line to see GET working.</div>
          <label>Please enter your name : </label>
          <input type={"text"}></input>
          <button
            onClick={() => {
              fetchMyEmployeesData();
            }}
          >
            Submit
          </button>
          <div>
            Name : {name}
            Id : {id}
            Address : {address}
          </div>
          {/* <button onClick={() => handleAddingNewrecord()}>Add new record</button> */}
        </div>
      </sesion3>
      <session4> <h2>Session 4 : Backend Integration Continuation and Redux</h2>
        <div><h5>Topics to cover :</h5>
          <ul>
            <li>Recap of session 3</li>
            <li>PUT/PATCH/UPDATE, DELETE</li>
            <li>Redux intro, synchronu vs async</li>
            <li>what are Redux thunk, Saga, Observables, flux </li>
            <li>React-redux set up
              <ul type='circle'>
                <li>In class based component uing CONNECT HOC</li>
                <li>In Functional components, redux hooks</li>
              </ul>
            </li>
            <li>Context API in React</li>


          </ul>
        </div>
        <NewRecord />
        <UpdateRecord />
      </session4>

     </div>
     <div>
     <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
     </div>
    </>
  );
}

export default App;

