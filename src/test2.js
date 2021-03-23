import React, { useEffect, useState } from 'react';
import { Button,Overlay,Tooltip,OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'https://official-joke-api.appspot.com/jokes/random';


const Test2=()=>{
  const[set,setGoals] = useState([]);

  const anotherUser = async()=>{
    const response = await fetch(url);
    const input = await response.json();
    setGoals(set);
    console.log(set)
  }

  useEffect(()=>{
    anotherUser();
  },[])

  return(
    <>
      {set.map((user)=>{
        const {id , type , programming ,setup , punchline } = user;

        return(
          <li key={id}>
            <div>
              <h3>id : {id}</h3>
              <h3>type : {type}</h3>
              <h3>programming : {programming}</h3>
              <h3 style={{color:'green'}}>setup : {setup}</h3>
              <h3 style={{color:'red'}}>punchline : {punchline}</h3>

              {/* <a href={section}>Profile</a> */}
            </div>
          </li>
        )
      })}
    </>
  )
}



export default Test2;
