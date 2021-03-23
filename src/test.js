// import React, { useEffect, useRef, useState } from 'react';
// import { Button,Overlay,Tooltip,OverlayTrigger } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Test2 from './test2';

// const url = 'https://official-joke-api.appspot.com/jokes/programming/random';
// const url1 = 'https://official-joke-api.appspot.com/jokes/random';

// const currDate = new Date().toLocaleTimeString();
// const UserEffectFetch=()=>{
//   const[input,output] = useState([]);
  
//   const getUser = async()=>{
//     const response = await fetch(url);
//     const input = await response.json();
//     output(input);
//     console.log(input)
//   }
  
//   useEffect(()=>{
//     getUser();
//   },[])
//   return(
//     <>
//     <h2>Joke API</h2>
//     <h2>{currDate}</h2>
//     <div className="times" style={{display:'flex',flex:'column',width:'100px',height: '80px',fontSize:'30px',alignItems:'center',textAlign:'center',justifyContent:'center',paddingBottom:'1em',paddingTop:'2em',marginLeft:'50%'}}>    
//     </div>
//     <ul className="users">
//       {input.map((user)=>{
//         const {id , type , programming ,setup , punchline } = user;
//         return(
//           <li key={id}>
//             <div>
//               <h3>id : {id}</h3>
//               <h3>type : {type}</h3>
//               <h3>programming : {programming}</h3>
//               <h3 style={{color:'green'}}>setup : {setup}</h3>
//               <h3 style={{color:'red'}}>punchline : {punchline}</h3>
//               {/* <a href={section}>Profile</a> */}
//             </div>
//           </li>
//         )
//       })}

//     </ul>
//     <ul>
//       <Test2/>
//     </ul>
//     </>
//   )

  
// }



// export default UserEffectFetch;


import React, { useEffect, useRef, useState } from 'react';
import { Button,Overlay,Tooltip,OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'https://official-joke-api.appspot.com/jokes/programming/random';
let currDate = new Date(2021,5,3,21);
currDate = currDate.getHours();
let greeting = "";
const Test=()=>{
  const[users,output] = useState([]);
  // const button=()=>{
  //   currDate = new Date().toLocaleTimeString();
  //   output(currDate);
  // }
  // setInterval(button,1000);

 
  if(currDate>=1 && currDate<12)
  {
     greeting = "Wishing you a " + " Good morning ";
  }
  else if(currDate>=12 && currDate<16)
  {
     greeting = " Wishing you a " + " Good afternoon ";
  }
  else if(currDate>=16 && currDate<=20)
  {
     greeting = " Wishing you a " + " Good evening ";
  }
  else
  {
     greeting = " Wishing you a " + " Good night ";
  }
  const getUser=async()=>{
    const response = await fetch(url);
    const users = await response.json();
    output(users);
    
  };
    useEffect(()=>{
    getUser();
  },[]);

  return(
    <>
    <h2>Joke API</h2>
    <h2>{greeting}</h2>
    <ul className='users'>
      {users.map((user)=>{
        const {id , type , programming ,setup , punchline} = user;
        return(
          <li key={id}>
            <div>
              <h3>id : {id}</h3>
              <h3>type : {type}</h3>
              <h3>programming : {programming}</h3>
              <h3>setup : {setup}</h3>
              <h3>punchline : {punchline}</h3>
            </div>
          </li>
        )
      })}
    </ul>
    </>
  )

  const button=()=>{
    currDate = new Date().toLocaleTimeString();
    output(currDate);
  }
  setInterval(button,1000);
}

export default Test;
